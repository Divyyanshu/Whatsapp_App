import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title , onPress} : any) => {
  return (
    <TouchableOpacity style={styles.btn_container} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.btn_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    btn_container : {
        backgroundColor : "#00A884",
        paddingVertical : verticalScale(8),
        paddingHorizontal : scale(30),
        borderRadius : moderateScale(5)
    },
    btn_text:{
     color : "white",
     fontSize : moderateScale(14)
    }
})