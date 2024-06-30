import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useUser } from '@clerk/clerk-expo';
import { COLORS } from '../../Constants/Colors';

const PatientAppointments = () => {


    return (
        <View style={styles.container}>
            <Text>Appointments</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,



    },

});

export default PatientAppointments;
