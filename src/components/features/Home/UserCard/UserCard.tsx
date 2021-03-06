import {Button, Icon} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY, SECONDARY, WHITE} from '../../../../styles/colors';

export default function UserCard({user, ...rest}: any) {
  return (
    <View style={styles.cardWrapper}>
      <Image
        style={styles.avatar}
        // source={require('../../../../assets/person.png')}
        source={{
          uri: user.avatar_url,
        }}
      />
      <Text style={styles.userName}>{user.login}</Text>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(user.html_url);
        }}
        style={{marginTop: 20}}>
        <LinearGradient colors={[PRIMARY, SECONDARY]} style={styles.signIn}>
          <Text style={styles.textSign}>View Profile</Text>
          <Icon
            ios="chevron-forward-outline"
            android="chevron-forward-outline"
            style={{fontSize: 20, color: WHITE}}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    height: 250,
    backgroundColor: 'whitesmoke',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#323232',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 3,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    marginTop: 30,
    fontWeight: '600',
    fontSize: 16,
  },

  orWrapper: {
    width: '90%',

    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: PRIMARY,
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
});
