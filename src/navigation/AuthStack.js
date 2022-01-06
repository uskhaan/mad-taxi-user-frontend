import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Stack = createStackNavigator();

const AuthStack = (props) => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
