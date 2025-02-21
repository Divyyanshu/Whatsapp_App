import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const chatPageProfile = () => {
  return (
    <View style={styles.headerContainer}>
        <Text>
            hello
        </Text>
    </View>
  )
}

export default chatPageProfile

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#075e54",
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: 80,
      },
    backButton: {
        marginRight: 10,
      },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 10,
      },
      userName: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
      status: {
        color: "#d0d0d0",
        fontSize: 12,
      },
})