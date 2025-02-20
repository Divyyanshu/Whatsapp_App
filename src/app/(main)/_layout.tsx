import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const MainStack = () => {
  return (
    <Stack>
     <Stack.Screen name="index" />
     <Stack.Screen name="chat" />
    </Stack>
  )
}

export default MainStack

const styles = StyleSheet.create({})