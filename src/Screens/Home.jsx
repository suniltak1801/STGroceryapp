import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Loder from '../common/Loder'

const Home = () => {
    const [modalVisible,setModalVisible] = useState(true)
  return (
    <View>
     <Loder modalVisible={modalVisible} setModalVisible={setModalVisible}/>
     <Text>sunil</Text>
    </View>
  )
}

export default Home