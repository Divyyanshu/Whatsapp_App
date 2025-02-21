import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import chatData from "../(main)/chatData";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
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
      <View style={styles.header}>
        <Text style={styles.header_text}>LoadInfoTech</Text>
        <Feather name="search" size={24} color="white" />
        <Ionicons name="options" size={24} color="white" />
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
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
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
    backgroundColor: "#008069",
  },
  chat_container: {
    backgroundColor: "white",
    borderRadius: moderateScale(30),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(20),
    justifyContent: "space-between",
    height: verticalScale(60),
    backgroundColor: "#008069",
  },
  header_text: {
    fontSize: scale(30),
    color: "white",
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
    borderRadius: 50,
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
  },
});

export default ChatScreen;
