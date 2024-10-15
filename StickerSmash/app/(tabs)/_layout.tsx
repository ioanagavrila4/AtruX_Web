import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; // Importing top tabs
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '@/app/(tabs)/HomeScree'; // Assuming these screens exist in components
import AboutScreen from '@/app/(tabs)/About Us'; // You need to create these screens
import ContactScreen from '@/app/(tabs)/Contact';
import AccountScreen from '@/app/(tabs)/Account';
//import { Colors } from '@/constants/Colors'; // Assuming you have a Colors object

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
       
        tabBarLabelStyle: {
          fontSize: 14, // Font size for the tab labels
        },
        tabBarIconStyle: {
          display: 'none', // Hide icons if you don't need them in the top tabs
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
  );
}
