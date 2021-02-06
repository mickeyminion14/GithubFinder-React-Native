import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './navigations/auth/auth.navigator';
import FeatureNavigator from './navigations/feature/feature.navigator';
import {PRIMARY, WHITE} from './styles/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {false ? (
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
