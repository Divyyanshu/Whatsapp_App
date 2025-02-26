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
import * as DocumentPicker from "expo-document-picker";
import AttachmentModal from "../../components/molecules/AttachmentModal";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const ChatPage = () => {
  const [messages, setMessages] = useState(messageChats);
  const [newMessage, setNewMessage] = useState("");
  const [pickedFile, setPickedFile] = useState(null);
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Fixed Document Picker Function
  const handleSelect = (type) => {
    console.log("Selected:", type);
    setModalVisible(false); 
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });

      if (result.canceled) {
        console.log("User cancelled document picker");
        return;
      }

      setPickedFile(result);
      console.log("hello ji File:", result);
    } catch (err) {
      console.log("Error picking document:", err);
    }
  };

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
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Hey Divyanshu here ! what's going on",
          sender: "bot",
          time: getCurrentTime(),
        },
      ]);
    }, 1000);

    setNewMessage("");

    setTimeout(
      () => flatListRef.current?.scrollToEnd({ animated: false }),
      100
    );
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    return (
      <>
        <View
          style={[
            styles.messageContainer,
            isUser ? styles.userMessageContainer : styles.botMessageContainer,
          ]}
        >
          <View
            style={[
              styles.message,
              isUser ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            {/* realime messages time */}
            <View style={styles.messageTime_container}>
              <Text style={styles.message_real_time}>{item.time}</Text>
              {item.messageStatus === "sent" && (
                <MaterialIcons name="done" size={16} color="black" />
              )}
              {item.messageStatus === "delivered" && (
                <MaterialIcons name="done-all" size={16} color="gray" />
              )}
              {item.messageStatus === "read" && (
                <MaterialIcons name="done-all" size={16} color="#00b6e7" />
              )}
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.messageChat_body}>
          <View style={styles.messageContainer}>
            <FlatList
              data={messages}
              renderItem={renderMessage}
              keyExtractor={(item, index) => index.toString()}
              ref={flatListRef}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: false })
              }
              contentContainerStyle={styles.messageList}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.message_Container}>
            <View style={styles.input_message}>
              <TouchableOpacity>
                <Feather name="smile" size={20} color="gray" />
              </TouchableOpacity>
              <TextInput
                style={styles.input_box}
                placeholder="Message"
                placeholderTextColor="black"
                color="black"
                value={newMessage}
                onChangeText={setNewMessage}
              />
              <View>
              <AttachmentModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSelect={handleSelect}
              />
              </View>
              <TouchableOpacity>
                <MaterialIcons name="camera-alt" size={20} color="gray" />
              </TouchableOpacity>
            </View>

            {/* Send Button / Mic Button */}
            <TouchableOpacity style={styles.micButton} onPress={sendMessage}>
              {newMessage.trim() === "" ? (
                <Ionicons name="mic" size={20} color="white" />
              ) : (
                <Ionicons name="send" size={20} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>
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
    alignItems: "center"
  },
  messageList: {
    padding: scale(10),
    justifyContent: "center",
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(15),
    alignItems: "center",
  },
  message: {
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    borderCurve : "continuous",
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
    height: verticalScale(40),
    backgroundColor: "#ECE5DD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(5),
    marginBottom : scale(10)
  },
  message_Container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input_message: {
    flex: 1,
    height :50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: moderateScale(30),
    borderCurve : "continuous",
    paddingHorizontal: scale(10),
    marginHorizontal: scale(10),
    gap: scale(8),
  },
  input_box: {
    flex: 1,
    paddingHorizontal: scale(10),
    fontSize: moderateScale(12),
    justifyContent : "space-between",
    alignItems: "center",
  },
  micButton: {
    backgroundColor: "#008069",
    padding: moderateScale(10),
    borderRadius: moderateScale(25),
    marginRight: 10,
  },
});
