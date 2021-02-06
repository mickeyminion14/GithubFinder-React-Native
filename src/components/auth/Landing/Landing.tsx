import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';
import {PRIMARY, SECONDARY} from '../../../styles/colors';

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.landingContainer}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
            resizeMode="stretch"
          />
          <Text style={styles.headerTitle}>Github Finder</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>
            Find anyone on Github and view their profile.
          </Text>
        </View>
      </View>
    );
  }
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
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
