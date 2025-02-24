import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { router } from 'expo-router'


const userProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>UserProfile</Text>
      <Button
        title="Go Back"
        onPress={() => {
          router.push("/(main)");
        }}
      />
    </View>
  );
};

export default userProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
});
