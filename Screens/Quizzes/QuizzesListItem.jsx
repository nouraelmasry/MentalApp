import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const QuizzesListItem = ({quiz}) => {
    const navigation = useNavigation();
    const handleQuizSelect = (quiz) => {
        navigation.push('QuizDetails', { quiz });
    };
  return (
    <TouchableOpacity style={styles.container} onPress={()=>handleQuizSelect(quiz)}>
      <Image source={quiz.image} style={styles.image}/>
      
      <View>
        <Text style={{fontFamily:'outfit-bold', fontSize:19, alignContent:'center',} }>{quiz.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default QuizzesListItem

const styles = StyleSheet.create({
    container:{
        padding:5,
        backgroundColor:'white',
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection:'row',
        gap: 5, 
        alignItems: 'center',
    },
    image:{
        width:80,
        height: 80,
        borderRadius: 15, 
        marginRight:10
    },
})