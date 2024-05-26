import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DoctorListItem = ({doctor}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('DoctorDetails',{doctor:doctor})}>
      <Image source={doctor.image} style={styles.image}/>
      <View style={styles.subContainer}>
        <Text style={{fontFamily:'outfit', color:'grey', fontSize:14}}>{doctor.specialization}</Text>
        <Text style={{fontFamily:'outfit-bold', fontSize:19}}>{doctor.name}</Text>
        <Text style={{fontFamily:'outfit', color:'#A9a9a9', fontSize:13}}>
        <Ionicons name="location-sharp" size={18} color="#9bb169"  />{doctor.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DoctorListItem

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'white',
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection:'row',
        gap: 10
    },
    image:{
        width:100,
        height: 100,
        borderRadius: 15
    },
    subContainer:{
        display: 'flex',
        gap: 5
    }
})