import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutUs from '../../components/About-Us/AboutUs';
import Home from '../../components/Home/Home';
import React from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';
import {GRAY, PRIMARY} from '../../styles/colors';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export default function FeatureNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'home':
              return focused ? (
                <Text>Home</Text>
              ) : (
                // <Icon name="home" size={25} color={PRIMARY}></Icon>
                <Text>Home</Text>

                // <Icon name="home" size={25}></Icon>
              );
            case 'about':
              return focused ? (
                <Text>Home</Text>
              ) : (
                // <Icon name="info" size={25} color={PRIMARY}></Icon>
                <Text>Home</Text>

                // <Icon name="info" size={25}></Icon>
              );

            default:
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
