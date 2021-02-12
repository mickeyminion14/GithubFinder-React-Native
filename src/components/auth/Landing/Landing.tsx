import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import {PRIMARY, SECONDARY, WHITE} from '../../../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
export default function Landing({navigation}: any) {
  return (
    <View style={styles.landingContainer}>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          style={styles.logo}
          source={require('../../../assets/logo.png')}
          resizeMode="stretch"
        />
        <Animatable.Text
          animation="bounceIn"
          duration={2000}
          style={styles.headerTitle}>
          Github Finder
        </Animatable.Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        duration={500}
        style={styles.footer}>
        <Text style={styles.title}>
          Find anyone on Github and view their profile.
        </Text>
        <View style={styles.getStarted}>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <LinearGradient colors={[PRIMARY, SECONDARY]} style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <Icon
                ios="chevron-forward-outline"
                android="chevron-forward-outline"
                style={{fontSize: 20, color: WHITE}}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
const {height} = Dimensions.get('screen');
const height_logo = height * 0.22;
const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    backgroundColor: PRIMARY,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: SECONDARY,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },

  getStarted: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
});
