import {View, Image, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../common/CustumInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badpassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

    const validate = () => {
      setModalVisible(true);
    if (email === '') {
      setBadEmail(true);
      setModalVisible(false);
    } else {
      setBadEmail(false);
    }

    if (password === '') {
      setBadPassword(true);
      setModalVisible(false);
    } else {
      setTimeout(() => {
        setBadPassword(false);
        getData()
      }, 2000);
     
    }
    }

    const getData = async () => {
      const mEmail = await AsyncStorage.getItem('EMAIL');
      const mPass = await AsyncStorage.getItem('PASSWORD');
      console.log(mEmail, mPass);
      if (email === mEmail && mPass === password) {
        setModalVisible(false);
        navigation.navigate('Home');
      } else {
        setModalVisible(false);
        alert('enter valid Email & Password');
      }
    };

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../Images/playstorelogo.png')}
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 100,
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 50,
          color: '#000',
          fontWeight: 600,
        }}>
        Login
      </Text>
      <CustomInput
        value={email}
        icon={require('../Images/email.png')}
        placeholder={'Enter Email Id'}
        onChangeText={txt => setEmail(txt)}
      />

      {badEmail === true && (
        <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
          Enter Your Email
        </Text>
      )}

      <CustomInput
        value={password}
        type={'password'}
        icon={require('../Images/lock.png')}
        placeholder={'Enter Password'}
        onChangeText={txt => setPassword(txt)}
      />
      {badpassword === true && (
        <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
          Enter Your Password
        </Text>
      )}
      <CommonButton title={'Login'} bgColor={'#000'} textColor={'#fff'} 
      onPress={validate}
      />

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 21,
          fontWeight: 800,
          marginTop: 30,
          textDecorationLine: 'underline',
        }}
        onPress={() => navigation.navigate('SignUp')}>
        Create New Account?
      </Text>
    </View>
  );
};

export default Login;
