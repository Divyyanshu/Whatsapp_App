import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { scale , verticalScale ,moderateScale} from "react-native-size-matters";

const chatPage = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
        {/* Message body */}
      <View style={styles.body}></View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.message_Container}>
          <View style={styles.input_message}>
            <TouchableOpacity>
              <Feather name="smile" size={20} color="gray" />
            </TouchableOpacity>
            <TextInput style={styles.input_box} placeholder="Message" placeholderTextColor="black" color="black" />
            <TouchableOpacity>
              <MaterialIcons name="attach-file" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="currency-rupee" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="camera-alt" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.micButton}>
            <Ionicons name="mic" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default chatPage;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    body: {
      flex: 1,
      backgroundColor: "#C4C4C4",
    },
    footer: {
      height: verticalScale(70), // Responsive height
      backgroundColor: "#C4C4C4",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: scale(10), // Responsive padding
      shadowColor: "#C4C4C4",
      shadowOffset: { width: 0, height: verticalScale(4) }, // Shadow responsive
      shadowOpacity: 0.3,
      shadowRadius: moderateScale(20),
      elevation: moderateScale(5), // Android shadow
    },
    message_Container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    input_message: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: moderateScale(30),
      paddingHorizontal: scale(8),
      paddingVertical: verticalScale(14),
      marginHorizontal: scale(10),
      marginBottom : scale(10),
      gap: scale(8),
    },
    input_box: {
      flex: 1,
      paddingHorizontal: scale(10),
      fontSize: moderateScale(16),
    },
    micButton: {
      backgroundColor: "#008069",
      padding: moderateScale(12),
      borderRadius: moderateScale(25),
      marginLeft: scale(10),
    },
  });


  // ----------date sat 22feb 2025

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
import messageChats from "./messageChats";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const ChatPage = () => {
  const [messages, setMessages] = useState(messageChats);
  const [newMessage, setNewMessage] = useState("");
  const [time, setTime] = useState(messageChats);
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = { text: newMessage, sender: "user", time: "time" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I am a bot!", sender: "bot" }]);
    }, 1000);

    setNewMessage("");
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    return (
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
    );
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 40}
      >
        <View style={styles.messageChat_body}>
          {/* Chat Messages */}
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item, index) => index.toString()}
            ref={flatListRef}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: true })
            }
            contentContainerStyle={styles.messageList}
          />
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
              <TouchableOpacity>
                <MaterialIcons name="attach-file" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="currency-rupee" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="camera-alt" size={20} color="gray" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.micButton} onPress={sendMessage}>
              <Ionicons name="mic" size={24} color="white" />
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
    backgroundColor: "white",
  },
  messageChat_body: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
  messageList: {
    padding: scale(10),
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(10),
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
    backgroundColor: "#f0f0f0",
  },
  messageText: {
    fontSize: moderateScale(12),
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
    height: verticalScale(70),
    backgroundColor: "#C4C4C4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
    shadowColor: "#C4C4C4",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(20),
    elevation: moderateScale(5),
  },
  message_Container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input_message: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: moderateScale(30),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(14),
    marginHorizontal: scale(10),
    marginBottom: scale(10),
    gap: scale(8),
  },
  input_box: {
    flex: 1,
    paddingHorizontal: scale(10),
    fontSize: moderateScale(16),
  },
  micButton: {
    backgroundColor: "#008069",
    padding: moderateScale(12),
    borderRadius: moderateScale(25),
    marginLeft: scale(10),
  },
});







--------
date 24 feb 2025


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
    const dateLabel = formatDate(message.timestamp || new Date().toISOString().split("T")[0]);
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
                        msg.sender === "user" ? styles.userMessageContainer : styles.botMessageContainer,
                      ]}
                    >
                      <View
                        style={[
                          styles.message,
                          msg.sender === "user" ? styles.userMessage : styles.botMessage,
                        ]}
                      >
                        <Text style={styles.messageText}>{msg.text}</Text>
                        <View style={styles.messageTime_container}>
                          <Text style={styles.message_real_time}>{msg.time}</Text>
                          {msg.messageStatus === "sent" && (
                            <MaterialIcons name="done" size={16} color="black" />
                          )}
                          {msg.messageStatus === "delivered" && (
                            <MaterialIcons name="done-all" size={16} color="gray" />
                          )}
                          {msg.messageStatus === "read" && (
                            <MaterialIcons name="done-all" size={16} color="#00b6e7" />
                          )}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              )}
              ref={flatListRef}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: false })
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
    justifyContent:"center",
    alignItems : "center",
    margin : verticalScale(10)
  },
  messageList: {
    padding: scale(10),
    justifyContent : "center"
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(15),
    alignItems : "center",
    justifyContent : "center"
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
    flexWrap : "wrap",
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
    justifyContent : "center",
    paddingHorizontal: scale(10),
    shadowColor: "#ECE5DD",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(20),
    elevation: moderateScale(5),
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
    justifyContent : "center",
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
    alignItems: "center"
  },
  micButton: {
    backgroundColor: "#008069",
    padding: moderateScale(12),
    borderRadius: moderateScale(25),
    marginRight : 10
  },
  dateHeader: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
  },
});

-------------------------------
// import React, { useState, useRef } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Text,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import Feather from "@expo/vector-icons/Feather";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import messageChats from "../../constants/messageChats";
// import { scale, verticalScale, moderateScale } from "react-native-size-matters";

// const ChatPage = () => {
//   const [messages, setMessages] = useState(messageChats);
//   const [newMessage, setNewMessage] = useState("");
//   const flatListRef = useRef(null);

//   const sendMessage = () => {
//     if (newMessage.trim() === "") return;

//     const getCurrentTime = () => {
//       const now = new Date();
//       return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//     };
//     const userMessage = {
//       text: newMessage,
//       sender: "user",
//       time: getCurrentTime(),
//       messageStatus: "read",
//     };
//     setMessages((prev) => [...prev, userMessage]);

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Hey Divyanshu here ! what's going on",
//           sender: "bot",
//           time: getCurrentTime(),
//         },
//       ]);
//     }, 1000);

//     setNewMessage(""); // Clear input after sending

//     setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
//   };

//   const renderMessage = ({ item }) => {
//     const isUser = item.sender === "user";
//     return (
//       <>
//         {/* <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" , margin:5 }}
//         >
//           <Text
//             style={{
//               paddingVertical: 5,
//               paddingHorizontal: 10,
//               backgroundColor: "white",
//               borderRadius : scale(5)
//             }}
//           >
//             01 july 2022
//           </Text>
//         </View> */}
//         <View
//           style={[
//             styles.messageContainer,
//             isUser ? styles.userMessageContainer : styles.botMessageContainer,
//           ]}
//         >
//           <View
//             style={[
//               styles.message,
//               isUser ? styles.userMessage : styles.botMessage,
//             ]}
//           >
//             <Text style={styles.messageText}>{item.text}</Text>
//             {/* realime messages time */}
//             <View style={styles.messageTime_container}>
//               <Text style={styles.message_real_time}>{item.time}</Text>
//               {item.messageStatus === "sent" && (
//                 <MaterialIcons name="done" size={16} color="black" />
//               )}
//               {item.messageStatus === "delivered" && (
//                 <MaterialIcons name="done-all" size={16} color="gray" />
//               )}
//               {item.messageStatus === "read" && (
//                 <MaterialIcons name="done-all" size={16} color="#00b6e7" />
//               )}
//             </View>
//           </View>
//         </View>
//       </>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.container}
//         keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 40}
//       >
//         <View style={styles.messageChat_body}>
//           <View style={styles.messageContainer}>
//           <FlatList
//             data={messages}
//             renderItem={renderMessage}
//             keyExtractor={(item, index) => index.toString()}
//             ref={flatListRef}
//             onContentSizeChange={() =>
//               flatListRef.current?.scrollToEnd({ animated: false })
//             }
//             contentContainerStyle={styles.messageList}
//           />
//           </View>
//         </View>

//         {/* Footer */}
//         <View style={styles.footer}>
//           <View style={styles.message_Container}>
//             <View style={styles.input_message}>
//               <TouchableOpacity>
//                 <Feather name="smile" size={23} color="gray" />
//               </TouchableOpacity>

//               <TextInput
//                 style={styles.input_box}
//                 placeholder="Message"
//                 placeholderTextColor="black"
//                 color="black"
//                 value={newMessage}
//                 onChangeText={setNewMessage}
//               />
//               <TouchableOpacity>
//                 <MaterialIcons name="attach-file" size={22} color="gray" />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <MaterialIcons name="camera-alt" size={22} color="gray" />
//               </TouchableOpacity>
//             </View>

//             {/* Send Button / Mic Button */}
//             <TouchableOpacity style={styles.micButton} onPress={sendMessage}>
//               {newMessage.trim() === "" ? (
//                 <Ionicons name="mic" size={24} color="white" />
//               ) : (
//                 <Ionicons name="send" size={24} color="white" />
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default ChatPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECE5DD",
//   },
//   messageChat_body: {
//     flex: 1,
//     backgroundColor: "#ECE5DD",
//     justifyContent:"center",
//     alignItems : "center",
//     margin : verticalScale(10)
//   },
//   messageList: {
//     padding: scale(10),
//     justifyContent : "center"
//   },
//   messageContainer: {
//     flexDirection: "row",
//     marginBottom: verticalScale(15),
//     alignItems : "center",
//     justifyContent : "center"
//   },
//   message: {
//     padding: moderateScale(10),
//     borderRadius: moderateScale(8),
//     maxWidth: "70%",
//   },
//   userMessageContainer: {
//     justifyContent: "flex-end",
//     alignSelf: "flex-end",
//   },
//   botMessageContainer: {
//     justifyContent: "flex-start",
//     alignSelf: "flex-start",
//   },
//   userMessage: {
//     backgroundColor: "#E7FFDB",
//   },
//   botMessage: {
//     backgroundColor: "#ffffff",
//   },
//   messageText: {
//     fontSize: moderateScale(13),
//     flexWrap : "wrap",
//     color: "#000",
//   },
//   messageTime_container: {
//     flex: 1,
//     marginTop: 10,
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   message_real_time: {
//     fontSize: scale(10),
//     color: "#313131",
//   },
//   footer: {
//     height: verticalScale(45),
//     backgroundColor: "#ECE5DD",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent : "center",
//     paddingHorizontal: scale(10),
//     shadowColor: "#ECE5DD",
//     shadowOffset: { width: 0, height: verticalScale(4) },
//     shadowOpacity: 0.3,
//     shadowRadius: moderateScale(20),
//     elevation: moderateScale(5),
//   },
//   message_Container: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input_message: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "white",
//     justifyContent : "center",
//     borderRadius: moderateScale(30),
//     paddingHorizontal: scale(8),
//     paddingVertical: verticalScale(14),
//     marginHorizontal: scale(10),
//     gap: scale(8),
//   },
//   input_box: {
//     flex: 1,
//     paddingHorizontal: scale(10),
//     fontSize: moderateScale(16),
//     alignItems: "center"
//   },
//   micButton: {
//     backgroundColor: "#008069",
//     padding: moderateScale(12),
//     borderRadius: moderateScale(25),
//     marginRight : 10
//   },
// });