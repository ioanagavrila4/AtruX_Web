import React from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('@/assets/images/backgroundd.png')} // Update this path with your image
      style={styles.background}
      resizeMode="cover" // Ensures the image covers the entire screen
      blurRadius={4} // Set the desired blur effect here
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>A platform intended for Truck Drivers & Dispatchers</Text>
        <Text style={styles.text2}>From drivers to drivers</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Ensure the background image covers the full width
    height: '100%', // Ensure the background image covers the full height
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the left (start)
    paddingVertical: 20, // Adds some padding around the content
    paddingLeft: 20, // Adds padding to the left side
  },
  text: {
    fontSize: 50,
    color: '#fff', // Set text color to white (or any color that contrasts with your background)
    textAlign: 'left', // Left-aligns the text
    marginVertical: 10, 
    // Adds vertical space between text sections
    width: '40%'
  },
  text2: {
    fontSize: 30,
    color: '#FFE500', // Set text color to a contrasting color
    textAlign: 'left', // Left-aligns the text
    marginVertical: 10, // Adds vertical space between text sections
  },
});
