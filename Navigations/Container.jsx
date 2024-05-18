import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./TabNavigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../Screens/HomeScreen/HomePage";
import BookingPage from "../Screens/BookingScreen/BookingPage";
import ProfilePage from "../Screens/ProfileScreen/ProfilePage";
import { COLORS } from "../Constants/Colors";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/LoginScreen/Login";

const Stack = createNativeStackNavigator();
const Container = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>


    )

}
export default Container;
