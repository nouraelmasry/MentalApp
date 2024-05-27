import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuizzesData from './QuizzesData';
import { Ionicons } from '@expo/vector-icons';
import QuizzesListItem from './QuizzesListItem';
import { COLORS } from '../../Constants/Colors';

const QuizzesList = () => {
    const navigation = useNavigation();

    const handleQuizSelect = (quiz) => {
        navigation.push('QuizDetails', { quiz });
    };

    return (
        <View style={{padding:20, paddingTop:100, flex:1 }}>
            <TouchableOpacity style={styles.backBtnContainer} >
                <Ionicons name='arrow-back-outline' size={30} color='black'/>
                <Text style={{fontSize:25, fontFamily:'outfit-medium', color:"black"}}>Available Quizzes</Text>
            </TouchableOpacity>

            <FlatList
                data={QuizzesData}
                style={{marginTop:15}}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <QuizzesListItem quiz={item}/>}
                // (
                //     <TouchableOpacity style={styles.quizItem} onPress={() => handleQuizSelect(item)}>
                //         <Text style={styles.quizTitle}>{item.title}</Text>
                //     </TouchableOpacity>
                // )
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backBtnContainer:{
        position: 'absolute',
        zIndex:10,
        padding:20,
        marginVertical:30,
        display: 'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
      },
    quizItem: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10,
    },
    quizTitle: {
        fontSize: 18,
    },
});

export default QuizzesList;
