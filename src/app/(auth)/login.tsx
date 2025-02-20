import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComp from "@/src/components/atoms/ButtonComp";

const Login = () => {

  const onVerify = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading_text}>Enter your phone number</Text>
          <Text style={styles.heading_description}>
            WhatsApp will need to verify your phone number.{" "}
            <Text style={styles.link_description}>What’s my number?</Text>
          </Text>
        </View>
        <View style={styles.input_container}>
          <View style={styles.horizontal_line}></View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="Next" onPress={onVerify} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: verticalScale(50),
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  heading_container: {
    alignItems: "center",
    paddingHorizontal: scale(30),
    gap: verticalScale(20),
  },
  heading_text: {
    fontSize: moderateScale(20),
    fontWeight : "bold",
  },
  heading_description: {
    textAlign: "center",
  },
  link_description: {
    color: "#0C42CC",
  },
  input_container: {

  },
  horizontal_line:{
    width : "100%",
    height : 2,
    backgroundColor:"#00A884"
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
