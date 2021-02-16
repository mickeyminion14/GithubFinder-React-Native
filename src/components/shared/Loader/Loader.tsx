import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {PRIMARY} from '../../../styles/colors';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';

export default function Loader() {
  return (
    <>
      <View style={styles.loaderBackground}></View>
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" color={PRIMARY} />
      </View>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  loaderBackground: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 998,
    backgroundColor: 'gray',
    opacity: 0.3,
    top: 0,
    elevation: 999,
  },
  loaderWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 999,
    backgroundColor: 'transparent',
    top: 0,
    elevation: 999,
  },
});
