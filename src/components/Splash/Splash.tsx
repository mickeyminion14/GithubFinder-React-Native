
import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Image } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor="#27ae60" barStyle="default"/>
            <View style={styles.splashWrapper }>
                <View style={styles.titleWrap}>
                <Image source={require('../../assets/logo.png')}/>

                <Text style={styles.title}> Github App </Text>
                </View>
                <View style={styles.subTitleWrap}>
                <Text style={styles.subTitle}>powered by React Native</Text>

                </View>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    splashWrapper:{
        backgroundColor:"#27ae60",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
        
    },
    subTitle:{
        color:"white",
        fontWeight:"200"
    },
    subTitleWrap:{
        // flex:1
        paddingBottom:30
    },
    title :{
        color:"white",
        fontSize:35,
        fontWeight:"700",
        marginTop:20
    },
    titleWrap:{
        justifyContent:"center",
        flex:1,
        alignItems:"center"   
    }
})
