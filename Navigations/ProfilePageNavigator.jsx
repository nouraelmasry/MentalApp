import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PatientAppointments from '../Screens/ProfileScreen/PatientAppointments';
import PatientDocuments from '../Screens/ProfileScreen/PatientDocuments';
import PatientHistory from '../Screens/ProfileScreen/PatientHistory';
import { COLORS } from '../Constants/Colors';



const Tab = createMaterialTopTabNavigator();


const ProfilePageNavigator = () => {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIndicatorStyle: styles.tabBarIndicator,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
            }}

            style={{ marginTop: 60 }}
        >
            <Tab.Screen name="History" component={PatientHistory} />
            <Tab.Screen name="Documents" component={PatientDocuments} />
            <Tab.Screen name="Appointments" component={PatientAppointments} />

        </Tab.Navigator>



    );
};

export default ProfilePageNavigator;
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.Primary,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        overflow: 'hidden',
    },
    tabBarLabel: {
        fontSize: 14,
        fontFamily: 'outfit-bold',
    },
    tabBarIndicator: {
        backgroundColor: 'white',
        height: '100%',
        borderRadius: 20,
        opacity: 0.3,
    },

});

