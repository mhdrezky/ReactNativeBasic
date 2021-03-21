import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Routes = () => {
  console.log('=== Routes ===');
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
        headerMode="screen"
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        headerMode="screen"
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
        headerMode="screen"
      />
    </Stack.Navigator>
  );
};

export default Routes;
