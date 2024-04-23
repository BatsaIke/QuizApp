import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Toast from 'react-native-toast-message';
import { register } from '../../component/api/apiActions';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmit = async () => {
    if (password !== password2) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Passwords do not match',
      });
      return;
    }
    try {
      const requestData = { name, email, password };
      const res = await dispatch(register(requestData));
      if (res.success) {
        Toast.show({
          type: 'success',
          text1: 'Registration Successful',
          text2: 'Please login to continue',
        });
        navigation.navigate('Login');
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Registration Failed',
        text2: 'Please try again'
      });
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingContainer}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <Text style={styles.largeText}>Sign Up</Text>
        <Text style={styles.formText}>
          <Text style={styles.icon}>👤</Text> Create Your Account
        </Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#666" 
          value={name}
          onChangeText={text => onChange('name', text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#666" 
          value={email}
          onChangeText={text => onChange('email', text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666" 
          value={password}
          onChangeText={text => onChange('password', text)}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#666" 
          value={password2}
          onChangeText={text => onChange('password2', text)}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={onSubmit} style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.myText}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')} style={styles.linkText}>
            Log in
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#dedede'  // Ensures the background is bright and not faded
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',  // Ensures text is dark for better readability
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    color: "#000"  // Ensures icon is visible and clear
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    backgroundColor: '#FFF'  // Bright white background for clear visibility
  },
  formText: {
    fontSize: 16,
    color: '#333', // Dark color for better readability
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#17a2b8',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  myText: {
    marginTop: 16,
    fontSize: 14,
    color: '#000',  // Dark text for clarity
  },
  linkText: {
    color: '#17a2b8',
    fontWeight: 'bold',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
});

export default Register;
