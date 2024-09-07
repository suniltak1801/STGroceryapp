import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

const CustomInput = ({keyboardType,value,onChangeText,icon,placeholder,type}) => {
  return (
    <View style={{
        width:'85%',
        height:60,
        borderWidth:0.5,
        borderRadius:20,
        marginTop:30,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    }}>
        <Image source={icon} style={{width:24, height:24}} />
        <TextInput
        value={value}
        keyboardType={keyboardType? keyboardType:'default'}
        placeholder={placeholder}
        secureTextEntry={type?true:false}
        style={{marginLeft:1, width:'85%', fontWeight:'600', marginLeft:10}}
        onChangeText={onChangeText}
        />
     
    </View>
  )
}

export default CustomInput