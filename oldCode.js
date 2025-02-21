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