import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import CalendarPicker from 'react-native-calendar-picker'
import { addMonths } from '../../node_modules/date-fns/addMonths';
import { COLORS, Colors } from '../../Constants/Colors';
import { FlatList } from 'react-native';
import { TextInput } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native';


const BookingModal = ({hideModal}) => {

    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState();

    useEffect(()=>{
        getTime();

    }, [])
    const getTime=()=>{
        const timeList=[];
        for(let i=8;i<=11;i++)
            {
                timeList.push({time:i+':00 AM'})
                timeList.push({time:i+':30 AM'})
            }
            timeList.push({time:'12:00 PM'});
            for(let i=1;i<=7;i++)
                {
                    timeList.push({time:i+':00 PM'})
                    timeList.push({time:i+':30 PM'})
                }
                setTimeList(timeList);
    }
  return (
    <ScrollView>
    <KeyboardAvoidingView style={{padding:30}}>
      <TouchableOpacity style={styles.backBtnContainer} onPress={()=>hideModal()}>
        <Ionicons name='arrow-back-outline' size={30} color='black'/>
        <Text style={{fontSize:25, fontFamily:'outfit-medium'}}>Booking</Text>
      </TouchableOpacity>
      <Text style={{marginTop:50, fontFamily:"outfit-medium", fontSize:17, padding:5}}>Select date</Text>
      <View style={styles.calendarContainer}>
        <CalendarPicker 
        onDateChange={setSelectedDate}
        width={350}
        minDate={Date.now()}
        todayBackgroundColor={COLORS.white}
        todayTextStyle={{color:COLORS.black}}
        selectedDayColor={COLORS.Primary}
        selectedDayTextColor='white'
        />
      </View>
      <View style={{marginTop:20}}>
        <Text style={{marginBottom:8, fontFamily:"outfit-medium", fontSize:17 }}>Select time slot</Text>
        <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <TouchableOpacity style={{marginRight:10}} onPress={()=>setSelectedTime(item.time)}>
                <Text style={[selectedTime==item.time?styles.selectedTime:styles.unselectedTime]}>{item.time}</Text>
            </TouchableOpacity>
        )}
        />
      </View>

      <View style={{paddingTop:15}}>
        <Text style={{fontFamily:'outfit-medium', fontSize:17, marginBottom:8}}>Any Suggestion Notes</Text>
        <TextInput placeholder='Notes' style={styles.notetextArea} numberOfLines={4} multiline={true} onChange={(text)=>setNote(text)} />
      </View>

      <TouchableOpacity style={{marginTop:20}}>
        <Text style={styles.confirmBtn}>Confirm & Book</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
   
  )
}

export default BookingModal

const styles = StyleSheet.create({
    backBtnContainer:{
        position: 'absolute',
        zIndex:10,
        padding:20,
        display: 'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
      },
      calendarContainer:{
        backgroundColor: "#e0ebd9",
        padding:20,
        marginTop:8,
        borderRadius:15
      },
      selectedTime:{
        padding:10,
        borderWidth:1,
        borderColor: COLORS.Orange,
        borderRadius:99,
        paddingHorizontal:15,
        color:COLORS.white,
        backgroundColor: COLORS.Orange
      },
      unselectedTime:{
        padding:10,
        borderWidth:1,
        borderColor: COLORS.Orange,
        borderRadius:99,
        paddingHorizontal:15,
        color:COLORS.Orange
      },
      notetextArea:{
        borderWidth:1,
        borderRadius:15,
        textAlignVertical:'top',
        padding:20,
        fontSize:13,
        fontFamily:'outfit',
        borderColor:COLORS.Primary
      },
      confirmBtn:{
        textAlign:'center',
        fontFamily:'outfit-medium',
        fontSize:17,
        backgroundColor:COLORS.Primary,
        color:COLORS.white,
        padding:10,
        borderRadius:99,
        elevation:2
      }
})