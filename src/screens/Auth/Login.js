import {JS} from '@aws-amplify/core';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Loader from '../../components/Loader';
import {_axiosPostAPI} from '../../components/Apis';
import Router from '../../navigation/Root';

const Login = (props) => {
  const [Email, setEmail] = useState('Uqba@gmail.com');
  const [Password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);

  const LoginUser = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(Email) === false) {
      alert('Please Enter Valid Email');
    } else if (Password === '') {
      alert('Please Enter Password');
    } else {
      setLoading(true);
      let data = {};
      data['email'] = Email;
      data['password'] = Password;
      data['role'] = 'customer';
      // alert(data);
      await _axiosPostAPI('api/taxi/user/login', data)
        .then(async (response) => {
          setLoading(false);
          // alert(JSON.stringify(response))
          props.navigation.navigate('Router');
        })
        .catch((err) => {
          setLoading(false);
          alert(JSON.stringify(err));
        });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, {marginTop: '5%'}]}
        placeholder={'Email'}
        value={Email}
        keyboardType={'email-address'}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={[styles.textInput, {marginTop: '5%'}]}
        placeholder={'Password'}
        value={Password}
        onChangeText={(Password) => setPassword(Password)}
        secureTextEntry
      />

      <Pressable
        onPress={() => LoginUser()}
        style={{
          backgroundColor: 'orange',
          marginTop: '15%',
          width: '40%',
          alignItems: 'center',
          paddingVertical: '4%',
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Sign in</Text>
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('Signup')}
        style={{
          marginTop: '15%',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 16}}>
          Already have an account ? Sign Up
        </Text>
      </Pressable>

      <Loader loading={loading} />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'orange',
    width: '90%',
    borderRadius: 10,
    paddingLeft: 15,
  },
});
