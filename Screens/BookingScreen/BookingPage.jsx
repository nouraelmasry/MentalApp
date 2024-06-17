import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import DoctorListItem from './DoctorListItem';


const BookingPage = () => {

  const DoctorsList = [
    {
        id: "01",
        name: "Dr. John Doe",
        address: "123 Main St, Cairo, Egypt",
        email: "johndoe@example.com",
        specialization: "Psychiatrist",
        image: require("../../Assets/Images/ahmedMohamed.jpg"),
        about: "A dedicated psychiatrist with a passion for helping individuals, especially with children and those dealing with PTSD. With years of experience in the mental health field, I strive to create a safe and supportive space for my patients. My approach is compassionate and patient-centered, ensuring that every session is tailored to your unique needs and experiences. I am here to support you on your journey to healing and growth. For those dealing with PTSD, I offer specialized techniques and therapies to help manage and overcome trauma. Working with children, I use age-appropriate methods to create a comfortable environment where they can express themselves freely and begin their path to recovery.",
        location: {
            latitude: 30.044420,
            longitude: 31.235712
        }
    },
    {
        id: "02",
        name: "Dr. Jane Smith",
        address: "456 Elm St, Cairo, Egypt",
        email: "janesmith@example.com",
        specialization: "Family therapy",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. Jane Smith specializes in the care of infants, children, and adolescents. She has a compassionate approach and over 15 years of experience.",
        location: {
            latitude: 30.056610,
            longitude: 31.229519
        }
    },
    {
        id: "03",
        name: "Dr. Emily Johnson",
        address: "789 Oak St, Giza, Egypt",
        email: "emilyjohnson@example.com",
        specialization: "Child Psychologist",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. Emily Johnson specializes in helping children and adolescents navigate emotional and behavioral challenges. She uses a variety of therapeutic techniques to support young patients and their families.",
        location: {
            latitude: 30.013056,
            longitude: 31.208853
        }
    },
    {
        id: "04",
        name: "Dr. Michael Brown",
        address: "101 Pine St, Giza, Egypt",
        email: "michaelbrown@example.com",
        specialization: "Clinical Psychologist",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. Michael Brown has a deep understanding of psychological assessments and therapeutic interventions. He works with a diverse population, providing evidence-based treatments for a wide range of psychological issues.",
        location: {
            latitude: 30.005493,
            longitude: 31.195759
        }
    },
    {
        id: "05",
        name: "Dr. Sarah Davis",
        address: "202 Maple St, Alexandria, Egypt",
        email: "sarahdavis@example.com",
        specialization: "Marriage and Family Therapist",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. Sarah Davis helps couples and families improve communication and resolve conflicts. She uses systemic therapy techniques to address relational issues and promote healthy family dynamics.",
        location: {
            latitude: 31.200092,
            longitude: 29.918739
        }
    },
    {
        id: "06",
        name: "Dr. William Martinez",
        address: "303 Cedar St, Alexandria, Egypt",
        email: "williammartinez@example.com",
        specialization: "Behavioral Therapist",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. William Martinez specializes in cognitive-behavioral therapy, helping patients change negative thought patterns and behaviors. He works with both adults and children, providing tools to manage stress and anxiety.",
        location: {
            latitude: 31.215640,
            longitude: 29.955267
        }
    },
    {
        id: "07",
        name: "Dr. Lisa Wilson",
        address: "404 Birch St, Cairo, Egypt",
        email: "lisawilson@example.com",
        specialization: "Clinical Social Worker",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. Lisa Wilson has extensive experience in providing mental health services within community settings. She supports clients through crisis intervention, counseling, and connections to resources.",
        location: {
            latitude: 30.033333,
            longitude: 31.233334
        }
    },
    {
        id: "08",
        name: "Dr. James Lee",
        address: "505 Walnut St, Giza, Egypt",
        email: "jameslee@example.com",
        specialization: "Neuropsychologist",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. James Lee focuses on the relationship between brain function and behavior. He conducts neuropsychological assessments and provides treatments for cognitive and emotional disorders.",
        location: {
            latitude: 30.009891,
            longitude: 31.192054
        }
    },
    {
        id: "09",
        name: "Dr. Anna Taylor",
        address: "606 Cherry St, Alexandria, Egypt",
        email: "annataylor@example.com",
        specialization: "Addiction Counselor",
        image: require("../../Assets/Images/HanaIbrahim.jpg"),
        about: "Dr. Anna Taylor provides support and treatment for individuals struggling with addiction. She uses a holistic approach, addressing both the psychological and physical aspects of addiction.",
        location: {
            latitude: 31.216536,
            longitude: 29.928068
        }
    }
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
