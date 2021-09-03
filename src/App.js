import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import codePush from 'react-native-code-push';
import MainNavigation from './navigation';
import { store } from './stores';

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
};

const SuperApp = process.env.NODE_ENV === 'production' ?
  codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App) : App;

export default SuperApp;
