import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { tabNavigations } from './navigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabComponents = () => (
  <Tab.Navigator>
    {tabNavigations.map(({ name, component, options }) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          headerShown: options.headerShown,
          tabBarIcon: (params) => <Icon name={options.icon} size={options.size} color={options.color || params.color} />,
        }}
      />
    ))}
  </Tab.Navigator>
);

const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeBase"
        options={{ headerShown: false }}
        component={tabComponents}
      />
      {/* add your another screen here using -> Stack.Screen */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
