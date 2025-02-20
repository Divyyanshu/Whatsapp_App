import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import imagePath from "@/src/constants/imagePath";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import ButtonComp from "@/src/components/atoms/ButtonComp";

const Terms_Agree = () => {
  const [loaded, error] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  const onAgree = ()=>{
    router.push("/(auth)/login")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image
          source={imagePath.welcome}
          style={styles.welcome_image}
          resizeMode="contain"
        />
        <Text style={styles.description_text}>
          Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap “Agree and continue” to accept the <Text style={styles.link_text}>Teams
          of Service.</Text>
        </Text>
        <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>from</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

export default Terms_Agree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: verticalScale(70),
  },
  header: {
    alignItems: "center",
    gap: moderateScale(25),
    paddingHorizontal: scale(30),
  },
  footer: {
    flex:1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000",
  },
  welcome_text: {
    textAlign: "center",
    fontSize: moderateScale(30),
    fontFamily: "Roboto_700Bold",
    marginBottom:moderateScale(20)
  },
  welcome_image: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  description_text: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Roboto_400Regular",
  },
  link_text:{
    color:"#0C42CC"
  }
});
