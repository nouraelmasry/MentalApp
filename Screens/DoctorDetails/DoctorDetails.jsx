import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const DoctorDetails = () => {
  const param= useRoute().params;
  useEffect(()=>{
    console.log(param?.doctor)
  }, [param])
  const navigation = useNavigation();
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <View>
    <ScrollView style={{marginTop:30, height:'88%'}}>
      <TouchableOpacity style={styles.backBtnContainer} onPress={()=>navigation.goBack()}>
        <Ionicons name='arrow-back-outline' size={30} color='black'/>
      </TouchableOpacity>
      <Image source={param?.doctor.image} style={{width:'100%', height:300}}/>
      <View style={styles.infoContainer}>
        <Text style={{fontFamily:'outfit-bold', fontSize:25}}>{param.doctor.name}</Text>
        <View style={styles.subContainer}>
          <Text style={{color:'white', backgroundColor:'#9bb169', padding:2, borderRadius:5, fontSize:14}}>{param.doctor.specialization}</Text>
        </View>
        <Text style={{fontSize:16, fontFamily:'outfit', color:'gray'}}><Ionicons name="location-sharp" size={18} color="#9bb169"  />{param.doctor.address}</Text>
        <View style={{borderWidth:0.4, color:'gray', marginTop:20, marginBottom:20}}></View>
        <View>
          <Text style={{fontSize:17, fontFamily:'outfit-bold', marginBottom:10}}>About me</Text>
          <Text style={{fontFamily:'outfit', color:'gray', fontSize:15, lineHeight:20}} numberOfLines={isReadMore?20:5}>{param.doctor.about}</Text>
          <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
          <Text style={{color:'#9bb169', fontSize:16, fontFamily:'outfit'}}>{isReadMore?'Read less':'Read more'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    <View style={{ display:'flex', flexDirection:'row', margin:8, gap:8}}>
      <TouchableOpacity style={styles.messageBtn}>
        <Text style={{textAlign:'center', fontFamily:'outfit-medium', color:"#9bb169", fontSize:18}}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookingBtn}>
        <Text style={{textAlign:'center', fontFamily:'outfit-medium', color:"white", fontSize:18}}>Book Now</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default DoctorDetails

const styles = StyleSheet.create({
  backBtnContainer:{
    position: 'absolute',
    zIndex:10,
    padding:20
  },
  infoContainer:{
    padding:20,
    display:'flex',
    gap:5
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    alignItems: 'center'
  },
  messageBtn:{
    padding:10,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#9bb169',
    borderRadius:99,
    flex:1
  }, 
  bookingBtn:{
    padding:10,
    backgroundColor:'#9bb169',
    borderWidth:1,
    borderColor:'#9bb169',
    borderRadius:99,
    flex:1
  }
})