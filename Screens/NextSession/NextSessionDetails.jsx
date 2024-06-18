import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';
import { SIZES } from '../../Constants/Sizes';
import { COLORS } from '../../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';



const NextSessionDetails = () => {
  
  const [meetingLink, setMeetingLink] = useState('https://teams.microsoft.com/l/meetup-join/19%3ameeting_OGFlMmQyNzctZDIyZS00YzAwLWJjNWUtZDAyMzhjOTY0Zjhl%40thread.v2/0?context=%7b%22Tid%22%3a%222b773d99-f229-4704-b562-5a3198831779%22%2c%22Oid%22%3a%2245da412d-732d-4b35-8c64-f08ba51721ec%22%7d');
  const navigation = useNavigation();

  const handleEnterSession = () => {
    Linking.openURL(meetingLink);
  };


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.profileMain}>
          <View style={styles.header}>
            <View style={styles.datecircle}>
              <Text style={{ fontFamily: 'outfit', color: 'white', marginTop: 15 }}>JUL</Text>
              <Text style={{ fontFamily: 'outfit', color: 'white' }}>28</Text>
            </View>
            <View>
              <Text style={{ color: COLORS.white, fontSize: 25, fontFamily: 'outfit' }}>Next Session</Text>
              <Text style={{ color: COLORS.white, flexWrap: 'wrap', marginRight: 70, fontSize: 13, opacity: 0.7 }}>
                Please make sure to enter the meeting or be present at the specified time
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.DocDetailsContainer}>
        <Image source={require('../../Assets/Images/HanaIbrahim.jpg')} style={styles.userImage} />
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 20, display:"flex", flexDirection:"row", gap:5 }}>
          <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>Dr. </Text>
          <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>Hana Ibrahim</Text>
        </View>
      </View>
      <View style={styles.ContactBtns}>
        <TouchableOpacity style={{ backgroundColor: COLORS.Primary, padding: 15, borderRadius: 15, paddingHorizontal: 40 }}>
          <Text style={{ color: 'white', fontFamily: 'outfit-medium' }}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: COLORS.Primary, padding: 15, borderRadius: 15, paddingHorizontal: 40 }}>
          <Text style={{ color: 'white', fontFamily: 'outfit-medium' }}>Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timingContainer}>
        <AntDesign name="clockcircle" size={24} color="gray" />
        <Text style={{ fontSize: 20 }}>Timing</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, marginLeft: 90 }}>
        <Text style={{ fontFamily: 'outfit', color: 'gray' }}>10:00 AM</Text>
        <Text style={{ fontFamily: 'outfit', color: 'gray' }}>-</Text>
        <Text style={{ fontFamily: 'outfit', color: 'gray' }}>11:00 AM</Text>
      </View>
      <View style={styles.timingContainer}>
        <Ionicons name="location-sharp" size={30} color="gray" />
        <Text style={{ fontSize: 20 }}>Location</Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 90 }}>
        <Text style={{ fontFamily: 'outfit', color: 'gray' }}>606 Cherry St, Alexandria, Egypt</Text>
      </View>
      <TouchableOpacity style={styles.enterBtn} onPress={handleEnterSession} >
        <Text style={styles.enterbtnTxt}>Enter Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextSessionDetails;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium + 20,
    paddingTop: SIZES.medium + 30,
    backgroundColor: COLORS.Primary,
    borderBottomRightRadius: SIZES.medium + 20,
    borderBottomLeftRadius: SIZES.medium + 20,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 99,
  },
  datecircle: {
    width: 45,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#a7c590',
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    alignContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
  },
  header: {
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
    height: 150,
  },
  DocDetailsContainer: {
    marginTop: 40,
    marginHorizontal: 40,
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
  ContactBtns: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    marginTop: 25,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
  },
  timingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    marginTop: 35,
    marginLeft: 35,
  },
  enterBtn: {
    backgroundColor: COLORS.Primary,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 50,
    marginTop: 100,
  },
  enterbtnTxt: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'outfit-medium',
  },
});
