import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// eslint-disable-next-line react-native/split-platform-components
import { BackHandler, Platform, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { tabNavigations, stackNavigations } from './navigation';
import { Colors } from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabComponents = () => {
  const [canClose, setCanClose] = useState(false);
  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    }
  }, [canClose]);

  const backHandler = () => {
    if (canClose) {
      BackHandler.removeEventListener('hardwareBackPress');
      BackHandler.exitApp();
    } else {
      ToastAndroid.show('Press back again to exit', 2000);
      setTimeout(() => setCanClose(false), 2000);
      setCanClose(true);
    }
    return true;
  };

  return (
    <Tab.Navigator>
      {tabNavigations.map(({ name, component, options }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown: options.headerShown,
            tabBarIcon: (params) => <Icon name={options.icon} size={options.size} color={options.color || params.color} />,
            tabBarShowLabel: false,
            tabBarActiveTintColor: Colors.red,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const MainNavigation = ({ login }) => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {stackNavigations.filter((x) => (login?.auth ? !x.public : x.public)).map(({ component, name, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
      {login?.auth && (
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={tabComponents}
        />
      )}
      {/* add your another screen here using -> Stack.Screen */}
    </Stack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = (state) => ({
  login: state.loginReducer,
});

export default connect(mapStateToProps, null)(MainNavigation);
