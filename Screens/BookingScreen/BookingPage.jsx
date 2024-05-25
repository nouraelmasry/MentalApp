// import React from "react";
// import { StyleSheet, Text, View } from 'react-native';
// import { COLORS } from "../../Constants/Colors";

// const BookingPage = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Booking page</Text>


//         </View>
//     )

// }
// export default BookingPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',

//     },

// });

import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import DoctorListItem from './DoctorListItem';
// import DoctorsList from '../path/to/DoctorsList'; // Adjust the path as necessary


const BookingPage = () => {

    const DoctorsList = [
        {
          id: "01",
          name: "Dr. John Doe",
          address: "123 Main St, Springfield, USA",
          email: "johndoe@example.com",
          specialization: "Psychiatrist",
          image: require("../../Assets/Images/ahmedMohamed.jpg"),
          about: "Dr. John Doe is a highly experienced cardiologist with over 20 years of experience in treating heart-related conditions.",
        },
        {
          id: "02",
          name: "Dr. Jane Smith",
          address: "456 Elm St, Springfield, USA",
          email: "janesmith@example.com",
          specialization: "Family therapy",
          image: require("../../Assets/Images/HanaIbrahim.jpg"),
          about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
        },
        {
            id: "03",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },{
            id: "04",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },{
            id: "05",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },{
            id: "06",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },{
            id: "07",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },{
            id: "08",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },{
            id: "09",
            name: "Dr. Jane Smith",
            address: "456 Elm St, Springfield, USA",
            email: "janesmith@example.com",
            specialization: "Family therapy",
            image: require("../../Assets/Images/HanaIbrahim.jpg"),
            about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
          },
      ];

  return (
    <View style={{padding:20, paddingTop:60 }}>
        <View>
            <Text style={{fontSize:20, fontFamily:'outfit-medium'}}>Choose your doctor</Text>
        </View>
        <FlatList 
         data={DoctorsList}
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
