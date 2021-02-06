import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutUs from '../../components/features/About-Us/AboutUs';
import Home from '../../components/features/Home/Home';
import React from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';
import {GRAY, PRIMARY, WHITE} from '../../styles/colors';
import {Text} from 'react-native';
import {Icon} from 'native-base';

const Tab = createBottomTabNavigator();

export default function FeatureNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'home':
              return focused ? (
                <Icon
                  ios="home"
                  android="home"
                  style={{fontSize: 20, color: PRIMARY}}
                />
              ) : (
                <Icon
                  ios="home-outline"
                  android="home-outline"
                  style={{fontSize: 20}}
                />
              );
            case 'about':
              return focused ? (
                <Icon
                  ios="person"
                  android="person"
                  style={{fontSize: 20, color: PRIMARY}}
                />
              ) : (
                <Icon
                  ios="person-outline"
                  android="person-outline"
                  style={{fontSize: 20}}
                />
              );

            default:
              return focused ? (
                <Icon
                  ios="home"
                  android="home"
                  style={{fontSize: 20, color: PRIMARY}}
                />
              ) : (
                <Icon
                  ios="home-outline"
                  android="home-outline"
                  style={{fontSize: 20}}
                />
              );
              break;
          }
        },
      })}
      tabBarOptions={{activeTintColor: PRIMARY, activeBackgroundColor: GRAY}}>
      <Tab.Screen
        options={{
          title: 'Home',
        }}
        name="home"
        component={Home}
      />

      <Tab.Screen
        options={{
          title: 'About Me',
        }}
        name="about"
        component={AboutUs}
      />
    </Tab.Navigator>
  );
}
