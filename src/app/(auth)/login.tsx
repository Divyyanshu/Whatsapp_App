import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageText}>Login</Text>
      <Link href={"/verify_otp"}>Go to Verify_otp</Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    marginHorizontal:20
  },
  pageText:{
    backgroundColor : "pink",
    padding :10,
    borderRadius : 20,
    textAlign: "center",
    marginBottom : 20
  }
});
