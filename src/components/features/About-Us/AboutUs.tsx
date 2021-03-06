import {Container, Content, Header, Icon, Item} from 'native-base';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {Image} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {utilityService} from '../../../services/utility.service';
import {logout, selectUser} from '../../../Store/slices/userSlice';
import {PRIMARY, WHITE} from '../../../styles/colors';
import {IConfirmDialog} from '../../../types/types';
import auth from '@react-native-firebase/auth';

const AboutUs = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    const dialogOptions: IConfirmDialog = {
      title: 'Are you sure you want to logout?',
      positiveAction: () => {
        dispatch(logout());
        auth().signOut();
      },
    };
    utilityService.showConfirmationDialog(dialogOptions);
  };
  return (
    <Container>
      <Header
        style={{backgroundColor: PRIMARY}}
        androidStatusBarColor={PRIMARY}
        iosBarStyle="light-content">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.heading}>Profile</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={handleLogout}>
            <Icon
              name="exit-outline"
              style={{
                color: WHITE,
                fontSize: 22,
                width: 30,
                textAlign: 'center',
              }}></Icon>
          </TouchableOpacity>
        </View>
      </Header>
      <View style={styles.profileContainer}>
        {user.photo ? (
          <Image
            style={styles.profileImage}
            source={{
              uri: user.photo,
            }}></Image>
        ) : (
          <Image
            style={styles.profileImage}
            source={require('../../../assets/person.png')}></Image>
        )}
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="person-outline" style={{color: PRIMARY}}></Icon>

          <Text style={styles.userName}>
            {user.displayName ? user.displayName : 'User'}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mail-outline" style={{color: PRIMARY}}></Icon>
          <Text style={styles.email}> {user.email}</Text>
        </View>
      </View>
    </Container>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  heading: {
    borderBottomWidth: 0,
    color: WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 80,
  },
  userName: {
    // marginTop: 30,
    fontSize: 25,
    color: 'gray',
    marginLeft: 10,
  },
  email: {
    // marginVertical: 5,
    marginLeft: 10,
    fontSize: 20,
    color: 'gray',
  },
  profileContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
