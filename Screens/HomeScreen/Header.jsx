import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { SIZES } from '../../Constants/Sizes';
import { COLORS } from '../../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'; // Import axios for HTTP requests

const Header = () => {
  const { user, isLoading } = useUser();

//   useEffect(() => {
//     async function checkAndAddUserToDb() {
//       try {
//         // Extract fields from the user object
//         const fullName = user.fullName || '';
//         const imageUrl = user.imageUrl || '';
//         const email = user.primaryEmailAddress.emailAddress || '';

//         // Check if the user exists in the database
//         let response = await fetch(`http://192.168.1.15:3000/users?email=${email}`);
//         let data = await response.json();

//         if (response.ok && data.length === 0) {
//           // User does not exist, add the user to the database
//           response = await fetch('http://192.168.1.15:3000/users', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               name: fullName,
//               email: email,
//               image: imageUrl,
//             }),
//           });

//           if (response.ok) {
//             const addedUser = await response.json();
//             console.log('User added to backend:', addedUser);
//           } else {
//             console.error('Failed to add user to database');
//           }
//         } else {
//           console.log('User already exists in the database:', data);
//         }
//       } catch (error) {
//         console.error('Error checking or adding user to database', error);
//       }
//     }

//     if (!isLoading && user) {
//       checkAndAddUserToDb();
//     }
//   }, [user, isLoading]);

useEffect(() => {
    async function checkAndAddUserToDb() {
      try {
        if (!user) return;

        // Extract fields from the user object
        const fullName = user.fullName || '';
        const imageUrl = user.imageUrl || '';
        const email = user.primaryEmailAddress.emailAddress || '';

        // Check if the user exists in the local database
        let response = await fetch(`http://192.168.1.15:3000/users?email=${email}`);
        let data = await response.json();

        if (response.ok && data.length === 0) {
          // User does not exist, add the user to the local database
          response = await fetch('http://192.168.1.15:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: fullName,
              email: email,
              image: imageUrl,
            }),
          });

          if (response.ok) {
            const addedUser = await response.json();
            console.log('User added to backend:', addedUser);

            // Add user as a Patient resource to FHIR server
            await addPatientToFHIR(user);
          } else {
            console.error('Failed to add user to local database');
          }
        } else {
          console.log('User already exists in the local database:', data);

          // Add user as a Patient resource to FHIR server
          await addPatientToFHIR(user);
        }
      } catch (error) {
        console.error('Error checking or adding user to database', error);
      }
    }

    if (!isLoading && user) {
      checkAndAddUserToDb();
    }
  }, [user, isLoading]);

  const addPatientToFHIR = async (user) => {
    try {
      // Prepare Patient resource
      const patient = {
        resourceType: 'Patient',
        name: [{
          text: user.fullName,
          family: user.lastName,
          given: [user.firstName],
        }],
        telecom: [{
          system: 'email',
          value: user.primaryEmailAddress.emailAddress,
        }],
        birthDate: '1990-01-01', // Example birth date
        gender: 'female', // Example gender
        // Add more fields as necessary
      };

      // Send POST request to FHIR server
      const response = await axios.post('https://fhir.simplifier.net/taskFHIR/Patient', patient, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYW5ubWljaGVsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIyMTAxYmU3My1hNjg4LTQxYTItYWFhYi0zMTQwZGE3ZGI5NTgiLCJqdGkiOiI1ZmRiOGMyYi1lNjY2LTRlMzEtYWU4ZC02ZTkyNWU5YTQyMTYiLCJleHAiOjE3MTg4NjY5OTIsImlzcyI6ImFwaS5zaW1wbGlmaWVyLm5ldCIsImF1ZCI6ImFwaS5zaW1wbGlmaWVyLm5ldCJ9.XOvNJjXY6l1CjaRWqBhWIm_Je2Bw9OUChezDfsYQUHg', // Replace with your actual authorization token
          'Content-Type': 'application/json',
        },
      });

      console.log('Patient added to FHIR:', response.data);
    } catch (error) {
      console.error('Failed to add patient to FHIR:', error);
    }
  };

  return user && (
    <View style={styles.container}>
      <View style={styles.profileMain}>
        <View style={styles.profile}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={{ color: COLORS.white }}>Welcome</Text>
            <Text style={{ color: COLORS.white, fontSize: 20, fontFamily: 'outfit' }}>{user?.fullName}</Text>
          </View>
        </View>
        <Ionicons name="notifications" size={27} color="white" />
      </View>
      <View style={styles.SearchBar}>
        <TextInput placeholder='search' style={styles.textinput} />
        <FontAwesome name="search" size={24} color={COLORS.Primary} style={styles.searchBtn} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium + 20,
    paddingTop: SIZES.medium + 30,
    backgroundColor: COLORS.Primary,
    borderBottomRightRadius: SIZES.medium + 20,
    borderBottomLeftRadius: SIZES.medium + 20,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textinput: {
    padding: SIZES.small + 3,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.bg,
    borderRadius: 10,
    width: '85%',
    fontSize: 18,
  },
  profileMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
  },
  SearchBar: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  searchBtn: {
    backgroundColor: COLORS.bg,
    padding: 10,
    borderRadius: 10,
  },
});
