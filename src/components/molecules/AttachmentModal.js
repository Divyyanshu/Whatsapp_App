import React, { useState } from "react";
import { View, Modal, TouchableOpacity, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const AttachmentModal = ({ isVisible, onClose }) => {
  const handlePress = (type) => {
    console.log(`${type} clicked!`);
    onClose(); // Close modal after selection
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Choose an Option</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Document")}>
            <MaterialIcons name="attach-file" size={30} color="#000" />
            <Text style={styles.iconLabel}>Document</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Camera")}>
            <MaterialIcons name="camera-alt" size={30} color="#000" />
            <Text style={styles.iconLabel}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Gallery")}>
            <MaterialIcons name="photo" size={30} color="#000" />
            <Text style={styles.iconLabel}>Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Audio")}>
            <Feather name="mic" size={30} color="#000" />
            <Text style={styles.iconLabel}>Audio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Location")}>
            <Ionicons name="location-outline" size={30} color="#000" />
            <Text style={styles.iconLabel}>Location</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Contact")}>
            <Ionicons name="person-outline" size={30} color="#000" />
            <Text style={styles.iconLabel}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const ChatPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Attach Button to Open Modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <MaterialIcons name="attach-file" size={22} color="gray" />
      </TouchableOpacity>

      {/* Attachment Modal */}
      <AttachmentModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" },
  modalContainer: { 
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    backgroundColor: "white", 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
    padding: 20 
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  gridContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" },
  iconButton: { alignItems: "center", marginBottom: 20 },
  iconLabel: { marginTop: 5, fontSize: 14, color: "#000" },
});


