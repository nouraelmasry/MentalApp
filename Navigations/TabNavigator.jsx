import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomeScreen/HomePage';
import BookingPage from '../Screens/BookingScreen/BookingPage';
import ProfilePage from "../Screens/ProfileScreen/ProfilePage";
import { COLORS } from "../Constants/Colors";
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (

        <SafeAreaView style={{ flexDirection: 'row', paddingBottom: -5, bottom: -380, margin: 15, elevation: 0 }}>

            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.Brown,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarLabelPosition: 'below-icon',
                style: {

                    flexDirection: 'row',
                    paddingBottom: -5,
                    bottom: -380,
                    margin: 15,
                    elevation: 0,

                    backgroundColor: COLORS.bg,
                },


            }}
            >
                <Tab.Screen name='Home' component={HomePage}
                    options={{
                        tabBarLabel: ({ color }) => (
                            <Text style={{ color: color, fontSize: 11, alignContent: "center" }}> Home</Text>),
                        tabBarIcon: ({ color, Size }) => (
                            <FontAwesome name="home" size="24" color={color} />
                        )


                    }} />
                <Tab.Screen name='Profile' component={ProfilePage}
                    options={{
                        tabBarLabel: ({ color }) => (
                            <Text style={{ color: color, fontSize: 12 }}> Booking</Text>),
                        tabBarIcon: ({ color, Size }) => (
                            <FontAwesome name="bookmark" size="22" color={COLORS.gray} />
                        )

                    }} />
                <Tab.Screen name='Booking' component={BookingPage}
                    options={{
                        tabBarLabel: ({ color }) => (
                            <Text style={{ color: color, fontSize: 12 }}>Profile</Text>),
                        tabBarIcon: ({ color, Size }) => (
                            <FontAwesome name="user-circle" size="22" />
                        )

                    }} />


            </Tab.Navigator>

        </SafeAreaView>



    )

}
export default TabNavigator;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

