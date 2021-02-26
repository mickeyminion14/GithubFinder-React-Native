import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../components/auth/Login/Login';
import React, {useEffect} from 'react';
import Landing from '../../components/auth/Landing/Landing';
import {GoogleSignin} from '@react-native-community/google-signin';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '588987405644-6e6cpaic2eh52rmf8e1hlqb15tjh2963.apps.googleusercontent.com',
    });
    return () => {};
  }, []);
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
