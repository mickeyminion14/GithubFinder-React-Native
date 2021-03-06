import {Container} from 'native-base';
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <View style={styles.aboutUsContainer}>
          <Text> Under Development</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  aboutUsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
