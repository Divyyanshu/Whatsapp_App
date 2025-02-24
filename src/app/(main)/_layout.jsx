import { StyleSheet, TouchableOpacity, View , Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Stack } from "expo-router";

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
                  Alert.alert("Video call");
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
                  Alert.alert("Call");
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
                  Alert.alert("Profile page");
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
    </Stack>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
