import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../components/auth/Login/Login';
import React from 'react';
import Landing from '../../components/auth/Landing/Landing';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="landing">
      <Stack.Screen
        name="landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
