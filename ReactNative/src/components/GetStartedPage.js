import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const GetStartedPage = ({ navigateTo }) => {
  return (
    <ImageBackground 
      source={{ uri:'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My App</Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" onPress={() => navigateTo('Login')} color="#FF6F61" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => navigateTo('Register')} color="#4CAF50" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // cover to ensure the image covers the entire background
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(252, 228, 236, 0.8)', // semi-transparent background to make text readable
  },
  title: {
    fontSize: 35, // Increased font size
    fontWeight: 'bold',
    color: '#C2185B', // Dark pink color
    marginVertical: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Adds vertical space between buttons
    width: '80%', // Ensures the buttons have the same width
  },
});

export default GetStartedPage;