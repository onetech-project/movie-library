import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import MainNavigation from './navigation/navigation';
import { store } from './stores';
import codePush from 'react-native-code-push';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      </>
    );
  }
}

App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);

export default App;
