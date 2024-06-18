import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import { useUser } from '@clerk/clerk-expo';
import { COLORS } from '../../Constants/Colors';
import PatientHistory from './PatientHistory';

const ProfilePage = () => {
    /* const [doctors, setDoctors] = useState([]);
 
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
    const { user, isLoading } = useUser();
    const [selectedSection, setSelectedSection] = useState(null);

    const renderSectionContent = () => {
        switch (selectedSection) {
            case 'History':
                return <PatientHistory />;
            case 'Scanned Document':
                return <Text style={styles.sectionText}>This is the Scanned Document section.</Text>;
            case 'Previous Appointments':
                return <Text style={styles.sectionText}>This is the Previous Appointments section.</Text>;
            default:
                return <Text style={styles.sectionText}>Please select a section.</Text>;
        }
    };
    return user && (
        <View style={styles.container}>
        
            <View style={styles.containerHeader}>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={styles.profilePhoto}
                />
                <Text style={styles.userName}>{user?.fullName}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setSelectedSection('History')}
                >
                    <Text style={styles.buttonText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setSelectedSection('Scanned Document')}
                >
                    <Text style={styles.buttonText}>Documents</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setSelectedSection('Previous Appointments')}
                >
                    <Text style={styles.buttonText}>Previous Appointments</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
                {renderSectionContent()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    containerHeader: {
        flex: 1,
        alignItems: 'center',
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
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 50,

    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',



    },
    buttonContainer: {
        flexDirection: 'row',

        marginBottom: 310,
    },
    button: {
        backgroundColor: COLORS.Primary,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonText: {
        fontSize: 16,

    },
    sectionContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',

        marginTop: 20,
    },
    sectionText: {
        fontSize: 18,
        textAlign: 'center',
    },
});
*/
    const emaill = user?.emailAddresses;
    const { user, isLoading } = useUser();
    const [name, setName] = useState(user?.fullName);
    const [phoneNumber, setPhoneNumber] = useState('01115989409');
    const [gender, setGender] = useState('Female');
    const [email, setEmail] = useState(user.primaryEmailAddress?.emailAddress || '');
    return user && (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={styles.profilePhoto}
                />
                <Text style={styles.userName}>{user?.fullName}</Text>
            </View>
            <View style={styles.history}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
                <Text style={styles.label}>Gender</Text>
                <View style={styles.genderContainer}>
                    <TouchableOpacity
                        style={[styles.genderButton, gender === 'Male' && styles.genderButtonSelected]}
                        onPress={() => setGender('Male')}
                    >
                        <Text style={styles.genderButtonText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderButton, gender === 'Female' && styles.genderButtonSelected]}
                        onPress={() => setGender('Female')}
                    >
                        <Text style={styles.genderButtonText}>Female</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

};
export default ProfilePage;
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 50,

    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',



    },
    containerHeader: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: '5%',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
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
        backgroundColor: COLORS.Primary,
    },
    genderButtonText: {
        fontSize: 16,
    },
    history: {
        padding: 20,
        paddingBottom: 150,

    },
    editButton: {
        backgroundColor: COLORS.Primary,
        padding: 10,
        marginTop: 20,
        borderRadius: 50,
    },
    editButtonText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 150,

    },
});