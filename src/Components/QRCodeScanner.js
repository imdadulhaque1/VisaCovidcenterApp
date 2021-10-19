import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const QRCodeScanner = (props) => {
    return (
        <View>
            <Text style={{fontSize: 20}}>This page is for QR Code Scanner!</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
              <TouchableOpacity style={styles.button} onPress={() => {
                  props.navigation.navigate("Login");
              }}>
                  <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Next</Text>
              </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",

    },
    button: {
        backgroundColor: "#2a24c9",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: "70%",
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 50
    },
})

export default QRCodeScanner;
