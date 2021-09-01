import 'react-native-gesture-handler'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'

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
    )
  }
}

export default App;
