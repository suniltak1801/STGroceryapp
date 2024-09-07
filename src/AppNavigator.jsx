import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
        options={{headerShown:false}}
         name="Splash" 
         component={Splash}>
         </Stack.Screen>
      
        <Stack.Screen 
        options={{headerShown:false}}
        name="Login" component={Login}>
        </Stack.Screen>

        <Stack.Screen 
        options={{headerShown:false}}
        name="SignUp" component={SignUp}>
        </Stack.Screen>

        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
