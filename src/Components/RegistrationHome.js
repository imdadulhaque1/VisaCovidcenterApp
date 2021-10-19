import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function App(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
 
  return (
      <ScrollView>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/images/logo.png")} />
      <View style={styles.accountsForm}>
          <View style={styles.loginSign}>
            <TouchableOpacity style={styles.loginSignBtn1} onPress={() =>{
                  props.navigation.navigate("Login")
              }}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginSign}>
            <TouchableOpacity style={styles.loginSignBtn2} >
                <Text style={styles.loginText}>REGISTRATION</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() =>{
            props.navigation.navigate("Home")
        }}>
        <Text style={styles.textLogin}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  accountsForm:{
      flexDirection: "row",
      justifyContent: 'space-between',
      width: "100%",
      padding: 5,
      marginBottom: 10,
      marginLeft: 30

  },
  loginSign:{
      width: "50%"
  },
  loginSignBtn2:{
    width: "85%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#c4c3e8",
  },
  loginSignBtn1:{
    width: "85%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#f5f0f0",
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height:  280,
    width: 230,
    marginBottom: 30
  },
 
  inputView: {
    backgroundColor: "#ffffff",
    borderColor: "#0f0f0f",
    borderWidth:1,
    borderRadius: 10,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginSignBtn:{
    width: "85%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f5f0f0",
  },
 
  loginBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#021078",
  },
  textLogin:{
      color: "#ffffff"
  }
});