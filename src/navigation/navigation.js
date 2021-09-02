import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile/Profile.screen';
import Home from '../screens/Home/Home.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (params) => <Icon name="ios-home" size={25} color={params.color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: (params) => <Icon name="ios-settings" size={25} color={params.color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeBase"
        options={{ headerShown: false }}
        component={MyTabs}
      />
      {/* add your another screen here using -> Stack.Screen */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
