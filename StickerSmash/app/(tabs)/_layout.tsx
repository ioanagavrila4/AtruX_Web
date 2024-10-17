import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '@/app/(tabs)/HomeScree'; // Adjust path as needed
import AboutScreen from '@/app/(tabs)/About Us'; // Ensure the correct path
import ContactScreen from '@/app/(tabs)/Contact';
import AccountScreen from '@/app/(tabs)/Account';
import { View, Text, Image, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/ATRUX.svg')} // Update this with your image path
          style={styles.logo} // Apply styles for the image
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14, // Font size for the tab labels
            color: colorScheme === 'dark' ? '#fff' : '#000', // Color based on theme
          },
          tabBarStyle: {
            backgroundColor: 'transparent', // Makes the tab bar transparent
            elevation: 0, // Removes shadow on Android
            shadowOpacity: 0, // Removes shadow on iOS
            borderBottomWidth: 0, // Removes the bottom border
            position: 'absolute', // Makes sure the tab bar is positioned over content
            top: 50, // Adjust position to account for the logo height
            left: 0,
            right: 0,
            height: 50, // Adjust height if needed
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent', // Makes the tab indicator transparent
          },
        }}
      >
        {/* Home Tab */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        
        {/* About Us Tab */}
        <Tab.Screen
          name="AboutUs"
          component={AboutScreen}
          options={{
            title: 'About Us',
          }}
        />

        {/* Contact Tab */}
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            title: 'Contact',
          }}
        />

        {/* Account Tab */}
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Account',
          }}
        />
       
      </Tab.Navigator>
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/Line.png')} // Update this with your image path
          style={styles.line}// Apply styles for the image
        />
      </View>
    </View>
  );
}

// Styles for the layout
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow container to take full height
  },
  logoContainer: {
    position: 'absolute', // Position it on top of the tab bar
    top: 0, // Align to the top
    left: 16, // Adjust left positioning as necessary
    zIndex: 1, // Ensure it's on top of the tab bar
    flexDirection: 'row', // Align logo and title if needed
    alignItems: 'center',
    marginBottom: 10, // Space below the logo
  },
  logo: {
    width: 120, // Adjust logo width
    height: 20, // Adjust logo height
    marginRight: 8, // Space between logo and text (if any)
    top:56
  },
  line:{
    top: 90,
    width: 2640,
    left: -344
  }
});
