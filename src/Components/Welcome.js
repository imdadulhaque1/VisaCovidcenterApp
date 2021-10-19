import React from 'react';
import logo from '../../assets/images/logo.png';
import qrCodeScanner from "../../assets/images/qrcode.png";

import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const Welcome = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.upperBlock}>
                <Image style={styles.logo} source={logo}/>
                <Text style={{textAlign: "center", fontSize: 16}}>A Trusted Service !</Text>
            </View>
            <View style={{marginTop: 150}}>
                <TouchableOpacity onPress={() =>{
                        props.navigation.navigate("Scanner")
                }}>
                    <Image style={styles.qrCodeScanner} source={qrCodeScanner}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upperBlock:{
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  250,
        width: 200,
    },
    qrCodeScanner:{
        justifyContent: 'center',
        alignItems: 'center',
        height:  110,
        width: 110,
        marginBottom: 10
    }
})
export default Welcome;
