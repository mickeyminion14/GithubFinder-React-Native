import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../components/Login/Login';
import React from 'react';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
