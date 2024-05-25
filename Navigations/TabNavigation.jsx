import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomeScreen/HomePage';
import BookingPage from '../Screens/BookingScreen/BookingPage'
import ProfilePage from '../Screens/ProfileScreen/ProfilePage';
import { FontAwesome } from '@expo/vector-icons';
import ChatScreen from '../Screens/ChatBot/ChatScreen';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#9bb169"
        }}>
            <Tab.Screen name='home' component={HomePage}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7, marginBottom: 5 }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen name='booking' component={BookingPage}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7, marginBottom: 5 }}>Booking</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bookmark" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen name='Ask Ai' component={ChatScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7, marginBottom: 5 }}>Ask Ai</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="chat" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen name='profile' component={ProfilePage}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7, marginBottom: 5 }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})