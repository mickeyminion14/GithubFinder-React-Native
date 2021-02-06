/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './App.navigator';
import Home from './components/features/Home/Home';
import Login from './components/auth/Login/Login';
import Splash from './components/Splash/Splash';
import AuthNavigator from './navigations/auth/auth.navigator';
import FeatureNavigator from './navigations/feature/feature.navigator';

declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
