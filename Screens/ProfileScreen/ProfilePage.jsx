import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ProfilePage = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.1.13:3000/doctors")
            .then(response => {
                setDoctors(response.data);
                console.log(response.data, "h");
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Doctors</Text>
            <FlatList
                data={doctors}
                keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
                renderItem={({ item }) => (
                    <View style={styles.doctorContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>ID: {item.id}</Text>
                        <Text>Phone: {item.phoneNumber}</Text>
                        <Text>Description: {item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    doctorContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfilePage;
