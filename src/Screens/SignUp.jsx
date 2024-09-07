import {View, Image, Text, TextInput, ScrollView} from 'react-native';
import React,{useState} from 'react';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../common/CustumInput';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badpassword, setBadPassword] = useState(false);
  const [badphone, setBadPhone] = useState(false);
  const [baduser, setBadUser] = useState(false);
  const validate = () => {
    if (email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    if (user === '') {
      setBadUser(true);
    } else {
      setBadUser(false);
    }

    if (phone.length === 10) {
      setBadPhone(false);
    } else {
      setBadPhone(true);
    }
    }
  const navigation = useNavigation();
  return (
  <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
      
      <Image
        source={require('../Images/playstorelogo.png')}
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 60,
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 40,
          color: '#000',
          fontWeight: '600',
        }}>
        Sign Up
      </Text>
      <CustomInput
        icon={require('../Images/user.png')}
        placeholder={'User Name'}
        onChangeText={txt => setUser(txt)}
      />

      
{baduser === true && (
        <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
          Enter Your User Name
        </Text>
      )}

<CustomInput
        icon={require('../Images/email.png')}
        value={email}
        placeholder={'Enter Email Id'}
        onChangeText={txt => setEmail(txt)}
      />
      
      {badEmail === true && (
        <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
          Enter Your Email
        </Text>
      )}

<CustomInput
        icon={require('../Images/phone.png')}
        placeholder={'Enter Phone Number'}
        value={phone}
        keyboardType={'number-pad'}
        onChangeText={txt => setPhone(txt)}
      />
      
      {badphone === true && (
        <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
          Enter Your Phone number
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

      <CommonButton title={'Sign Up'} bgColor={'#000'} textColor={'#fff'} 
      onPress={validate}
      />

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 21,
          fontWeight: '800',
          marginTop: 30,
          textDecorationLine: 'underline',
          marginBottom:50
        }}
        onPress={() => navigation.goBack()}>
        Already have account?
      </Text>
    </View>
  </ScrollView>
  );
};

export default SignUp;
