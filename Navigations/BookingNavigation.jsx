import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BookingPage from '../Screens/BookingScreen/BookingPage'
import DoctorDetails from '../Screens/DoctorDetails/DoctorDetails';
const Stack = createStackNavigator();

const BookingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Booking' component={BookingPage}/>
        <Stack.Screen name='DoctorDetails' component={DoctorDetails}/>
    </Stack.Navigator>
  )
}

export default BookingNavigation

const styles = StyleSheet.create({})