import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({bgColor,title,textColor,onPress}) => {
  return (
   <TouchableOpacity
   style={{
    backgroundColor:bgColor,
    alignItems:'center',
    justifyContent:'center',
    height:60,
    width:'90%',
    marginTop:50,
    borderRadius:10,
    alignSelf:'center'
   }}
   onPress={()=>onPress()}
   >
        <Text style={{color:textColor, fontSize:23,
    fontWeight:600}}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CommonButton