import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import AuthNavigator from './navigations/auth/auth.navigator';
import FeatureNavigator from './navigations/feature/feature.navigator';
import {PRIMARY, WHITE} from './styles/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {selectUser} from './Store/slices/userSlice';
import {Subscription} from 'rxjs';
import {loaderService} from './services/loader.service';
import Loader from './components/shared/Loader/Loader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const user = useSelector(selectUser);
  useEffect(() => {
    console.info(user, 'ss');
    return () => {};
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
