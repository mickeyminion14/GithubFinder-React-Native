import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AboutUs extends Component {
    render() {
        return (
            <View style={styles.aboutUsContainer}>
                <Text> About Us </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    aboutUsContainer : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
