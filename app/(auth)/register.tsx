import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import BigButton from '../components/button';
import { useRouter } from 'expo-router';

const Register = () => {
  const { height } = Dimensions.get('window');
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validation function
  const validateFields = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all the fields');
      return false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }

    // Password matching
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }

    // Minimum password length check
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  // Handle register action
  const handleRegister = () => {
    if (validateFields()) {
      router.push('/login'); // Navigate to login if validation passes
    }
  };

  return (
    <View style={[styles.mainView, { height }]}>
      <View style={styles.logoView}>
        {/* Add logo or image here if needed */}
      </View>
      <View style={styles.fieldsView}>
        <Text style={styles.registerText}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldsView: {
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#FF7F3E',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#024CAA',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 15,
    fontSize: 16,
  },
});

export default Register;
