import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

export default function NoData() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/no-search-result.png')}
      />
      <Text style={styles.text}>No results found ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 400,
  },
  text: {
    fontSize: 24,
    color: 'gray',
  },
});
