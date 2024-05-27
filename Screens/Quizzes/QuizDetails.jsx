import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

const QuizDetails = () => {
    const route = useRoute();
    const { quiz } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleOptionSelect = (optionScore) => {
        setScore(score + optionScore);

        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Quiz finished
            Alert.alert('Quiz Finished', `Your total score is: ${score}`);
        }
    };

    const currentQuestion = quiz.questions[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            <FlatList
                data={currentQuestion.options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect(item.score)}>
                        <Text style={styles.optionText}>{item.text}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:80,
        flex: 1,
        padding: 30,
    },
    question: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    option: {
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 18,
    },
});

export default QuizDetails;
