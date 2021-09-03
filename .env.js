const os = require('os');
const fs = require("fs-extra");
const path = require('path');
const glob = require('glob');
const exec = require('child_process').exec;
const rimraf = require('rimraf');
const xml2js = require('xml2js');
const plist = require('plist');
const semver = require('semver');
require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 20;


// install pre commit linter, evaluate your code automaticly before commit
const preCommitLinter = () => {
  const gitPath = `${__dirname}/.git`;
  rimraf.sync(`${gitPath}/hooks/pre-commit.sample`);
  rimraf.sync(`${gitPath}/hooks/pre-commit`);
  fs.copyFileSync(`${__dirname}/pre-commit`, `${gitPath}/hooks/pre-commit`);
  fs.chmodSync(`${gitPath}/hooks/pre-commit`, '755');
  console.log(`Pre-commit installed`);
};

// write bundle ID Android based on env configuration
const changeBundleIDAndroid = () => {
  const buckPath = `${__dirname}/android/app/BUCK`;
  const buildGradlePath = `${__dirname}/android/app/build.gradle`;

  const appSrcMainJavaPath = `${__dirname}/android/app/src/main/java`;

  const mainActivityPath = `${appSrcMainJavaPath}/**/*/MainActivity.java`;
  const mainApplicationPath = `${appSrcMainJavaPath}/**/*/MainApplication.java`;

  const androidManifestPath = `${__dirname}/android/app/src/main/AndroidManifest.xml`;
  const stringsPath = `${__dirname}/android/app/src/main/res/values/strings.xml`;

  // change BUCK Bundle ID
  fs.readFile(buckPath, 'utf8', (err, data) => {
    if (err) throw err;

    const buckFile = data.replace(/package\s=\s"[a-zA-Z0-9.]+",/ig, `package = "${process.env.APPBUNDLEID}",`);
    fs.writeFile(buckPath, buckFile, 'utf8', (errBuck) => {
      if (errBuck) throw errBuck;
      console.log(`BUCK rewrited!`);
    });
  });

  // change build.gradle Bundle ID
  fs.readFile(buildGradlePath, 'utf8', (err, data) => {
    if (err) throw err;

    const buildGradleFile = data.replace(/applicationId\s"[\w|\.]+"/i, `applicationId "${process.env.APPBUNDLEID}"`);
    fs.writeFile(buildGradlePath, buildGradleFile, 'utf8', (errBuildGradle) => {
      if (errBuildGradle) throw errBuildGradle;
      console.log(`Build Gradle rewrited!`);
    });
  });

  // change MainApplication.java Bundle ID
  let searchMainApplication = glob.sync(mainApplicationPath);
  if (searchMainApplication.length > 0) {
    searchMainApplication = searchMainApplication[0];
    fs.readFile(searchMainApplication, 'utf8', (err, data) => {
      if (err) throw err;

      const mainApplicationFile = data.replace(/package\s[\w|\.]+;/i, `package ${process.env.APPBUNDLEID};`);
      fs.writeFile(searchMainApplication, mainApplicationFile, 'utf8', (errMainApplication) => {
        if (errMainApplication) throw errMainApplication;
        console.log(`MainApplication.java rewrited!`);

        // create backup generated files
        fs.copyFileSync(searchMainApplication, `${appSrcMainJavaPath}/${path.basename(searchMainApplication)}`);

        // change MainActivity.java Bundle ID
        let searchMainActivity = glob.sync(mainActivityPath);
        if (searchMainActivity.length > 0) {
          searchMainActivity = searchMainActivity[0];
          fs.readFile(searchMainActivity, 'utf8', (err, data) => {
            if (err) throw err;

            const mainActivityFile = data.replace(/package\s[\w|\.]+;/i, `package ${process.env.APPBUNDLEID};`);
            fs.writeFile(searchMainActivity, mainActivityFile, 'utf8', (errMainActivity) => {
              if (errMainActivity) throw errMainActivity;
              console.log(`MainActivity.java rewrited!`);

              // create backup generated files
              fs.copyFileSync(searchMainApplication, `${appSrcMainJavaPath}/${path.basename(searchMainApplication)}`);
              fs.copyFileSync(searchMainActivity, `${appSrcMainJavaPath}/${path.basename(searchMainActivity)}`);

              // remove old app/src/main/java
              const oldSrcMainJavaDirs = fs.readdirSync(`${appSrcMainJavaPath}/`);
              oldSrcMainJavaDirs.forEach((item) => {
                if (item !== path.basename(searchMainApplication) && item !== path.basename(searchMainActivity)) {
                  rimraf.sync(`${appSrcMainJavaPath}/${item}`);
                }
              });

              // create new app/src/main/java
              let appBundleIdPath = process.env.APPBUNDLEID.split('.');
              let appBundleIdPathBuild = '';
              appBundleIdPath.forEach((bundleIdPath) => {
                appBundleIdPathBuild += `/${bundleIdPath}`;
                if (semver.gte(process.version, '10.15.0')) {
                  fs.mkdirSync(`${appSrcMainJavaPath}/${appBundleIdPathBuild}`, { recursive: true }, errMkdir => {
                    console.log(errMkdir);
                  });
                } else {
                  fs.mkdirSync(`${appSrcMainJavaPath}/${appBundleIdPathBuild}`, errMkdir => {
                    console.log(errMkdir);
                  });
                }
              });
              appBundleIdPath = appBundleIdPath.join('/');

              // copy from backup to new app/src/main/java
              fs.copyFileSync(`${appSrcMainJavaPath}/${path.basename(searchMainApplication)}`, `${appSrcMainJavaPath}/${appBundleIdPath}/${path.basename(searchMainApplication)}`);
              fs.copyFileSync(`${appSrcMainJavaPath}/${path.basename(searchMainActivity)}`, `${appSrcMainJavaPath}/${appBundleIdPath}/${path.basename(searchMainActivity)}`);

              // delete backup
              rimraf.sync(`${appSrcMainJavaPath}/${path.basename(searchMainApplication)}`);
              rimraf.sync(`${appSrcMainJavaPath}/${path.basename(searchMainActivity)}`);
            });
          });
        } else {
          console.log('Can not find MainActivity.java in android folder');
        }
      });
    });
  } else {
    console.log('Can not find MainApplication.java in android folder');
  }

  // change AndroidManifest.xml Bundle ID
  fs.readFile(androidManifestPath, 'utf8', (err, data) => {
    if (err) throw err;

    var parser = new xml2js.Parser();
    var builder = new xml2js.Builder();

    parser.parseString(data, (err, result) => {
      if (err) throw err;

      result.manifest.$.package = process.env.APPBUNDLEID;
      var androidManifestFile = builder.buildObject(result);
      fs.writeFile(androidManifestPath, androidManifestFile, 'utf8', (errAndroidManifest) => {
        if (errAndroidManifest) throw errAndroidManifest;
        console.log(`AndroidManifest.xml rewrited!`);
      });
    });
  });

  // change strings.xml App Name
  fs.readFile(stringsPath, 'utf8', (err, data) => {
    if (err) throw err;

    var parser = new xml2js.Parser();
    var builder = new xml2js.Builder();

    parser.parseString(data, (err, result) => {
      if (err) throw err;

      result.resources.string.forEach((item, key) => {
        if (result.resources.string[key] !== undefined) {
          if (item.$.name === 'app_name') {
            result.resources.string[key]._ = process.env.APPDISPLAYNAME;
          }
        }
      });

      var stringsFile = builder.buildObject(result);
      fs.writeFile(stringsPath, stringsFile, 'utf8', (errStrings) => {
        if (errStrings) throw errStrings;
        console.log(`strings.xml rewrited!`);
      });
    });
  });

};


// write bundle ID iOS based on env configuration
const changeBundleIDiOS = () => {
  glob(
    `${__dirname}/ios/**/*/Info.plist`,
    {
      ignore: [
        `${__dirname}/ios/Pods/**/*/Info.plist`,
        `${__dirname}/ios/build/**/*/Info.plist`,
      ]
    },
    (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        var plistFile = plist.parse(fs.readFileSync(file, 'utf8'));

        if (plistFile.CFBundleIdentifier !== undefined) plistFile.CFBundleIdentifier = process.env.APPBUNDLEIDIOS;
        if (plistFile.CFBundleName !== undefined) plistFile.CFBundleName = process.env.APPDISPLAYNAME;
        if (plistFile.CFBundleDisplayName !== undefined) plistFile.CFBundleDisplayName = process.env.APPDISPLAYNAME;

        fs.writeFile(file, plist.build(plistFile), 'utf8', (errPlist) => {
          if (errPlist) throw errPlist;
          console.log(`${file} rewrited!`);
        });
      });
    },
  );
};


// iOS Cocoapods configuration
const cocoaPodsConfig = () => {
  console.log("start reinstalling Cocoapods...");
  exec('cd ios && pod install', (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
};

const changeBundleAppJson = () => {
  fs.readFile('./app.json', 'utf8', (err, data) => {
    if (err) throw err;

    let appJsonFile = JSON.parse(data);
    appJsonFile.name = process.env.APPNAME;
    appJsonFile.displayName = process.env.APPDISPLAYNAME;
    appJsonFile = JSON.stringify(appJsonFile);

    fs.writeFile('./app.json', appJsonFile, 'utf8', (errAppJson) => {
      if (err) throw err;
      console.log(`app.json rewrited!`);
    });
  });
};

const configureLibrary = () => {
  const rootDir = process.cwd();

  console.log('add country property in version checker');
  const RNVersionCheckPath = `${rootDir}/node_modules/react-native-version-check/src/needUpdate.js`;
  const RNVersionCheckFixPath = `${rootDir}/library/react-native-version-check-fix/needUpdate.fix`;

  fs.readFile(RNVersionCheckFixPath, 'utf8', (readFileError, data) => {
    if (readFileError) throw readFileError;
    fs.writeFile(RNVersionCheckPath, data, 'utf8', (writeFileError) => {
      if (writeFileError) throw writeFileError;
      console.log('react-native-version-check has been fixed');
    });
  });
};

const postInstallMac = () => {
  // setup bundle ID
  changeBundleIDiOS();
  changeBundleIDAndroid();
  changeBundleAppJson();

  // setup library
  cocoaPodsConfig();
  configureLibrary();

  // setup automated linter
  preCommitLinter();
};

const postInstall = () => {
  // setup bundle ID
  changeBundleIDAndroid();
  changeBundleAppJson();

  // setup library
  configureLibrary();

  // setup automated linter
  preCommitLinter();

};

console.log("Reconfiguring Framework, OS Detected:");

switch (os.type()) {
  case "Darwin":
    console.log("MacOS");
    postInstallMac();
    break;

  case "Windows_NT":
  case "Linux":
    console.log("Linux");
    postInstall();
    break;

  default:
    console.log(`Unknown Platform not supported`);
}