import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Screens/HomeScreen/HomePage';
import QuizzesList from '../Screens/Quizzes/QuizzesList';
import QuizDetails from '../Screens/Quizzes/QuizDetails';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Quizzes' component={QuizzesList}/>
        <Stack.Screen name='QuizDetails' component={QuizDetails}/>
    </Stack.Navigator>
  );
}

export default HomeNavigation;

const styles = StyleSheet.create({});
