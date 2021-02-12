import {Icon, View} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PRIMARY, WHITE} from '../../../styles/colors';
import {windowHeight} from '../../../utils/Dimensions';

export default function SocialButton({
  buttonText,
  type,
  color,
  backgroundColor,
  ...rest
}: any) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <Icon
          style={{color: color, fontSize: 30, paddingTop: 5, ...styles.icon}}
          name={type}
        />
      </View>
      <View style={styles.buttonTextWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,

    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    fontWeight: 'bold',
  },
  buttonTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
