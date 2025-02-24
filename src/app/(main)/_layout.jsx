import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { router, Stack } from "expo-router";

const MainStack = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="chatPage"
        options={({ route }) => ({
          title: route.params?.name || "Chat",
          headerStyle: { backgroundColor: "#075e54" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/(main)/videoChats");
                }}
              >
                <Ionicons
                  name="videocam"
                  size={24}
                  color="white"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/(main)/call");
                }}
              >
                <Ionicons
                  name="call"
                  size={24}
                  color="white"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.navigate("/(main)/userprofile")
                }}
              >
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
          headerShown: true,
          headerBackTitle: "Chats",
          headerBackTitleVisible: true,
          headerTransparent: true,
          gestureEnabled: true,
          gestureDirection: "vertical",
        })}
      />
      <Stack.Screen name="videoChats"/>
      <Stack.Screen name="call" />
    </Stack>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
