import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { COLORS } from '../../Constants/Colors';
import axios from 'axios';

const PatientHistory = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>Nour Elmasry</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Phone Number:</Text>
                <Text style={styles.value}>XXXXXXXXXXXX</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.value}>Female</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    keyboardType="email-address"
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,


        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: '5%',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        flex: 1,
        padding: 10,
        borderRadius: 5,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    genderContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    genderButton: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'mintcream',
    },
    genderButtonSelected: {
        backgroundColor: 'lightgreen',
    },
    genderButtonText: {
        fontSize: 16,
    },
});

export default PatientHistory;
