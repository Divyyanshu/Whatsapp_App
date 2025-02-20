import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Verify_Otp = () => {
  return (
     <View style={styles.container}>
          <Text>Verify_Otp</Text>
          <Link href={'/(main)'}>Go to Main_Stack</Link>
        </View>
  )
}

export default Verify_Otp

const styles = StyleSheet.create({
  container:{
   flex: 1,
   justifyContent : "center",
   alignItems: "center"
  },
})