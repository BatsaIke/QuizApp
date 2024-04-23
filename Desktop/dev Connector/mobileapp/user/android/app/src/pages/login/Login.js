import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Toast from 'react-native-toast-message';
import { signin } from '../../component/api/apiActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (text, field) => {
    setFormData({ ...formData, [field]: text });
  };

  const onSubmit = async () => {
    try {
      const requestData = { email, password };
      let res = await dispatch(signin(requestData));
      console.log(res,"response")
      if (res.success) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Login successful',
        });
        navigation.navigate('Dashboard');
      }
    } catch (error) {
      
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>
        <Text style={styles.icon}>👤</Text> Sign In
      </Text>
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#666" 
        value={email}
        onChangeText={(text) => onChange(text, 'email')}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#666"  
        value={password}
        onChangeText={(text) => onChange(text, 'password')}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text onPress={() => navigation.navigate('Signup')} style={styles.linkText}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#dedede' // Light gray background to help text stand out
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000'  // Ensuring text is black for better visibility
  },
  icon: {
    fontSize: 30,
    color: "#000"  // Black color for better visibility
  },
  input: {
    height: 50,
    width: '90%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    color: '#000',
    borderRadius: 5,
    backgroundColor: '#FFF'  // Bright white background for contrast
  },
  button: {
    backgroundColor: '#17a2b8',
    width: '90%',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#000',  // Black text for readability
  },
  linkText: {
    color: '#17a2b8',
    fontWeight: 'bold',
  },
});

export default Login;
