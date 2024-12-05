import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';

const Register = () => {
  const { height } = Dimensions.get('window');
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  // Animated values
  const fadeAnimText = useRef(new Animated.Value(0)).current;
  const fadeAnimFields = useRef(new Animated.Value(0)).current;

  // Trigger fade-in animations
  useEffect(() => {
    Animated.timing(fadeAnimText, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimFields, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  // Validation function
  const validateFields = () => {
    const newErrors: { name: string; email: string; password: string; confirmPassword: string } = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) newErrors.email = 'Invalid email address.';
    }
    if (!password) newErrors.password = 'Password is required.';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleRegister = () => {
    // if (validateFields()) {
      router.push('/login'); 
    // }
  };
  return (
    <KeyboardAvoidingView
      style={[styles.mainView, { height }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoView}>
          <Animated.Text style={[styles.registerText, { opacity: fadeAnimText }]}>
            Register
          </Animated.Text>
          <LottieView
            source={require('../../assets/animations/Animation - 1733233655359.json')}
            autoPlay
            loop
            style={{ width: 300, height: 300 }}
          />

        </View>

        <Animated.View style={[styles.fieldsView, { opacity: fadeAnimFields }]}>
          <TextInput
            style={[
              styles.input,
              errors.name ? styles.inputError : null,
            ]}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

          <TextInput
            style={[
              styles.input,
              errors.email ? styles.inputError : null,
            ]}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <TextInput
            style={[
              styles.input,
              errors.password ? styles.inputError : null,
            ]}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

          <TextInput
            style={[
              styles.input,
              errors.confirmPassword ? styles.inputError : null,
            ]}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  fieldsView: {
    width: '100%',
    alignItems: 'center',
  },
  registerText: {
    color: '#FF7F3E',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '85%',
    height: 50,
    borderColor: '#024CAA',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 15,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  button: {
    backgroundColor: '#E38E49',
    width: '85%',
    marginTop: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
