import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Auth = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageText}>Auth</Text>
      <Link href={'/terms_agree'}>Go to terms_agree page</Link>
    </View>
  );
};

export default Auth;

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
