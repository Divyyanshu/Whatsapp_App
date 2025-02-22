import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,Platform,
  TextInput,
} from "react-native";
import chatData from "../../constants/chatData";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const ChatScreen = () => {
  function GotoChatPage(name) {
    router.push({
      pathname: "/(main)/chatPage",
      params: { name },
    });
  }
  return (
    <SafeAreaView style={styles.safe_container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 40}
      ></KeyboardAvoidingView>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.header_text}>LoadInfoTech</Text>
          <TouchableOpacity>
            <Ionicons name="options" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.heading_search}>
          <Ionicons name="search" size={18} color="grey" />
          <TouchableOpacity>
          <TextInput placeholder="Search" placeholderTextColor={"grey"} returnKeyType="done" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chat_container}>
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItem}
              onPress={() => GotoChatPage(item.name)}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.substring(0, 1)}
                </Text>
              </View>
              <View style={styles.chatDetails}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatTime}>{item.time}</Text>
                </View>
                <Text style={styles.chatMessage}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_container: {
    flex: 1,
    backgroundColor: "#008069"
  },
  chat_container: {
    backgroundColor: "white",
    // borderRadius: moderateScale(30),
  },
  heading_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading_search: {
    alignItems : "center",
    flexDirection: "row",
    backgroundColor: "#ededed",
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    borderRadius: scale(40),
    gap: 10,
  },
  header: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
    justifyContent: "space-between",
    height: verticalScale(100),
    backgroundColor: "white",
  },
  header_text: {
    fontSize: scale(20),
    color: "#008069",
    fontWeight: "600",
  },
  chatItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d3d3d3",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#c1eecc",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 20,
    color: "#008069",
  },
  chatDetails: {
    flex: 1,
    marginLeft: 15,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatTime: {
    color: "#aaa",
    fontSize: 12,
  },
  chatMessage: {
    color: "#000",
    fontSize: 14,
    marginTop: 3,
  }
});

export default ChatScreen;
