import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Verify_Otp = () => {
  return (
     <View style={styles.container}>
          <Text style={styles.pageText}>Verify_Otp</Text>
          <Link href={'/'}>Go to Index_Home</Link>
        </View>
  )
}

export default Verify_Otp

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    marginHorizontal:20
  },
  pageText:{
    backgroundColor : "pink",
    padding :10,
    borderRadius : 20,
    textAlign: "center",
    marginBottom : 20
  }

})