import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      navigateTo('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter valid email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMYNzuJWBFsPh7z3h_AIaYV-Htr8mnGoQTg&s' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'grey',
  },
  image: {
    width: 140, // Set the width of the image
    height: 140, // Set the height of the image
    marginBottom: 20, // Space between image and the title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: 'sky',
    borderRadius: 5,
   // backgroundColor:
  },
});

export default LoginPage;
