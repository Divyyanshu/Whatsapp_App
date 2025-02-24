import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import messageChats from "../../constants/messageChats";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const formatDate = (date) => {
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  if (date === today) return "Today";
  if (date === yesterday) return "Yesterday";
  return date;
};

const groupedMessages = (messages) => {
  return messages.reduce((acc, message) => {
    const dateLabel = formatDate(
      message.timestamp || new Date().toISOString().split("T")[0]
    );
    if (!acc[dateLabel]) acc[dateLabel] = [];
    acc[dateLabel].push(message);
    return acc;
  }, {});
};

const ChatPage = () => {
  const [messages, setMessages] = useState(messageChats);
  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const getCurrentTime = () => {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    const userMessage = {
      text: newMessage,
      sender: "user",
      time: getCurrentTime(),
      messageStatus: "read",
      timestamp: new Date().toISOString().split("T")[0],
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Hey Divyanshu here ! what's going on",
          sender: "bot",
          time: getCurrentTime(),
          timestamp: new Date().toISOString().split("T")[0],
        },
      ]);
    }, 1000);

    setNewMessage(""); // Clear input after sending

    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 40}
      >
        <View style={styles.messageChat_body}>
          <View style={styles.messageContainer}>
            <FlatList
              data={Object.keys(groupedMessages(messages))}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View>
                  <Text style={styles.dateHeader}>{item}</Text>
                  {groupedMessages(messages)[item].map((msg, index) => (
                    <View
                      key={index}
                      style={[
                        styles.messageContainer,
                        msg.sender === "user"
                          ? styles.userMessageContainer
                          : styles.botMessageContainer,
                      ]}
                    >
                      <View
                        style={[
                          styles.message,
                          msg.sender === "user"
                            ? styles.userMessage
                            : styles.botMessage,
                        ]}
                      >
                        <Text style={styles.messageText}>{msg.text}</Text>
                        <View style={styles.messageTime_container}>
                          <Text style={styles.message_real_time}>
                            {msg.time}
                          </Text>
                          {msg.messageStatus === "sent" && (
                            <MaterialIcons
                              name="done"
                              size={16}
                              color="black"
                            />
                          )}
                          {msg.messageStatus === "delivered" && (
                            <MaterialIcons
                              name="done-all"
                              size={16}
                              color="gray"
                            />
                          )}
                          {msg.messageStatus === "read" && (
                            <MaterialIcons
                              name="done-all"
                              size={16}
                              color="#00b6e7"
                            />
                          )}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              )}
              ref={flatListRef}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
              contentContainerStyle={styles.messageList}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.message_Container}>
            <View style={styles.input_message}>
              <TouchableOpacity>
                <Feather name="smile" size={23} color="gray" />
              </TouchableOpacity>

              <TextInput
                style={styles.input_box}
                placeholder="Message"
                placeholderTextColor="black"
                color="black"
                value={newMessage}
                onChangeText={setNewMessage}
              />
              <TouchableOpacity>
                <MaterialIcons name="attach-file" size={22} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="camera-alt" size={22} color="gray" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.micButton} onPress={sendMessage}>
              {newMessage.trim() === "" ? (
                <Ionicons name="mic" size={24} color="white" />
              ) : (
                <Ionicons name="send" size={24} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },
  messageChat_body: {
    flex: 1,
    backgroundColor: "#ECE5DD",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal :verticalScale(5)
  },
  messageList: {
    padding: scale(10),
    justifyContent: "center",
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(15),
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    maxWidth: "70%",
  },
  userMessageContainer: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  botMessageContainer: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#E7FFDB",
  },
  botMessage: {
    backgroundColor: "#ffffff",
  },
  messageText: {
    fontSize: moderateScale(13),
    flexWrap: "wrap",
    color: "#000",
  },
  messageTime_container: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  message_real_time: {
    fontSize: scale(10),
    color: "#313131",
  },
  footer: {
    height: verticalScale(45),
    backgroundColor: "#ECE5DD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(10),
    shadowColor: "#ECE5DD",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(20),
    elevation: moderateScale(5),
    marginBottom : 10
  },
  message_Container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input_message: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: moderateScale(30),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(14),
    marginHorizontal: scale(10),
    gap: scale(8),
  },
  input_box: {
    flex: 1,
    paddingHorizontal: scale(10),
    fontSize: moderateScale(16),
    alignItems: "center",
  },
  micButton: {
    backgroundColor: "#008069",
    padding: moderateScale(12),
    borderRadius: moderateScale(25),
    marginRight: 10,
  },
  dateHeader: {
    fontSize: scale(12),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: scale(10),
    color: "#888",
  },
});
