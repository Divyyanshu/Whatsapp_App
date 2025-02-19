import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Terms_Agree = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageText}>Terms_Agree</Text>
      <Link href={'/login'}>Go to Login</Link>
    </View>
  )
}

export default Terms_Agree

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