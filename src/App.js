import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import codePush from 'react-native-code-push';
import MainNavigation from './navigation/navigation';
import { store } from './stores';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
};

const SuperApp = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);

export default SuperApp;
