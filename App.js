import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from './Constants/Colors';
import Login from './Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './Screens/HomeScreen/HomePage';
import ProfilePage from './Screens/ProfileScreen/ProfilePage';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';
import BookingPage from './Screens/BookingScreen/BookingPage';
import { useFonts } from 'expo-font';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};



export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./Assets/Fonts/static/Outfit-Regular.ttf'),
    'outfit-medium': require('./Assets/Fonts/static/Outfit-Medium.ttf'),
    'outfit-bold': require('./Assets/Fonts/static/Outfit-Bold.ttf'),
    'outfit-semiBold': require('./Assets/Fonts/static/Outfit-SemiBold.ttf'),



  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <ClerkProvider publishableKey='pk_test_ZnVua3ktd2FydGhvZy04OS5jbGVyay5hY2NvdW50cy5kZXYk' tokenCache={tokenCache} >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '414',
    height: '896',
  },
});
