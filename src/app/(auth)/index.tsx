import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import imagePath from "@/src/constants/imagePath";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { router } from "expo-router";

const Auth = () => {
  const [loading, setLoading] = useState(false);

  // routing to index to welcome page
  function Go_to_welcome_page() {
    router.push("/(auth)/terms_agree");
  }

  function loading_time() {
    setLoading(true);
    setTimeout(Go_to_welcome_page, 3000);
  }

  useEffect(() => {
    setTimeout(loading_time, 2000);
  }, []);

  const [loaded, error] = useFonts({
    Roboto_700Bold,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logo_style} />
        <Text style={styles.Whatsapp_text}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {loading ? (
          <>
            <ActivityIndicator color={"#0CCC83"} size={moderateScale(50)} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>from</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    alignItems: "center",
    gap: moderateScale(14),
  },
  header: {},
  footer: {
    marginBottom: verticalScale(50),
    alignItems: "center",
    height: verticalScale(70),
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
  loading_text: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    color: "#00A884",
  },
  logo_style: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(12),
  },
  Whatsapp_text: {
    fontSize: moderateScale(35),
    fontFamily: "Roboto_700Bold",
  },
});
