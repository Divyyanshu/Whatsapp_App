import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthStack = () => {
  return (
    <Stack>
      <Stack.Screen name='index'/>
      <Stack.Screen name='terms_agree'/>
      <Stack.Screen name='login'/>
      <Stack.Screen name='verify_otp'/>
    </Stack>
  )
}

export default AuthStack

const styles = StyleSheet.create({})