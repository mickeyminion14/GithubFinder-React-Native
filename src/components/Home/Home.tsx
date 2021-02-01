import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function Home() {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.header}><Text>yo</Text></View>
            <View style={styles.container}>

            <Text>Home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green"
    },
    header:{
        backgroundColor:"red",
        width:"100%",
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
        // height:100,
        // width:Scree
    },
    homeContainer :{
        flex:1,
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    }
})
