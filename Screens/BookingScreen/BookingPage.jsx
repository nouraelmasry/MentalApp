import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import DoctorListItem from './DoctorListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookingPage = () => {

const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.1.15:3000/doctors")
            .then(response => {
                setDoctors(response.data);
                console.log(response.data, "h");
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

  return (
    <View style={{padding:20, paddingTop:60 }}>
        <View>
            <Text style={{fontSize:20, fontFamily:'outfit-medium'}}>Choose your doctor</Text>
        </View>
        <FlatList 
         data={doctors}
         style={{marginTop:15}}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => <DoctorListItem doctor={item} />}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 16,
    color: 'gray',
  },
  email: {
    fontSize: 14,
    color: 'blue',
  },
  address: {
    fontSize: 14,
    color: 'black',
  },
  about: {
    fontSize: 14,
    color: 'black',
  },
});

export default BookingPage;
