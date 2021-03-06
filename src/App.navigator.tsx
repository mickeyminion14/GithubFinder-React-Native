import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import AuthNavigator from './navigations/auth/auth.navigator';
import FeatureNavigator from './navigations/feature/feature.navigator';
import {PRIMARY, WHITE} from './styles/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {login, selectUser} from './Store/slices/userSlice';

import auth from '@react-native-firebase/auth';
import {loaderService} from './services/loader.service';
import {InterceptorService} from './services/interceptor.service';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    InterceptorService.intercept();

    loaderService.$loader.next(true);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (user: any) => {
    if (user) {
      console.log(user);
      dispatch(
        login({
          uid: user.uid,
          photo: user.photoURL,
          email: user.email,
          displayName: user.displayName,
        }),
      );

      loaderService.$loader.next(false);
    } else {
      loaderService.$loader.next(false);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animationEnabled: false}}>
        {user ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              // options={{
              //   headerStyle: {backgroundColor: PRIMARY},
              //   headerTintColor: WHITE,
              //   headerTitleStyle: {
              //     fontWeight: 'bold',
              //   },
              //   headerTitle: '',
              // }}
              name="feature"
              component={FeatureNavigator}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="auth"
            component={AuthNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
