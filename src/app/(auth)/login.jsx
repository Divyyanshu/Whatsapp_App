import { StyleSheet, Text, TextInput, View, Alert, KeyboardAvoidingView, Platform , Image, TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { router } from "expo-router";
import { moderateScale, s, scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComp from "@/src/components/atoms/ButtonComp";
import imagePath from "@/src/constants/imagePath";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      usernameRef.current?.focus();
    }, 500);
  }, []);

  const onLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter username and password");
      return;
    }
    // Alert.alert("Success", "Login Successful!");
    router.push("/(main)"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.heading_text}>Whatsapp Login</Text>
        <Image source={imagePath.loginImage} style={styles.loginImage}/>

        <View style={styles.input_container}>
          <TextInput
            ref={usernameRef}
            placeholder="Username"
            placeholderTextColor="black"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            // returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <TextInput
            ref={passwordRef}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity style={styles.forgot_password_container} onPress={()=>Alert.alert("okie!")}>
          <Text style={styles.forgot_password_text}>Forgot password ?</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <ButtonComp title="Login" onPress={onLogin} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    backgroundColor: "white",
    paddingVertical: verticalScale(50),
  },
  header: {
    flex :1,
    justifyContent : "space-around",
    paddingHorizontal : scale(30),
    gap : scale(20),
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  heading_text: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
  },
  input_container: {
    width: "100%",
    paddingHorizontal: scale(30),
    gap: verticalScale(15),
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: moderateScale(10),
    borderRadius: scale(5),
    color: "black",
  },
  loginImage:{
    width : 350,
    height : 350,
    margin : scale(10)
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  forgot_password_container:{
    marginBottom: 10 
  },
  forgot_password_text:{
    fontSize : scale(8)
  }
});
