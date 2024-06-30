import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '@clerk/clerk-expo'
import { SIZES } from '../../Constants/Sizes'
import { COLORS } from '../../Constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import QuizzesData from '../Quizzes/QuizzesData'
import QuizzesListItem from "../Quizzes/QuizzesListItem"
import ScannedItemsData from './ScannedItemsData'
import DocsListItem from './DocsListItem'

const OCRTasks = () => {
    const { user, isLoading } = useUser();
    const reportData = ScannedItemsData.filter(item => item.type === 'task');

    return user && (

        <View style={{padding:30}}>
            <FlatList
                data={reportData}
                style={{marginTop:10}}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <DocsListItem doc={item}/>}
            />
        </View>

    )
}

export default OCRTasks

const styles = StyleSheet.create({
    container: {
        padding: SIZES.medium + 20,
        paddingTop: SIZES.medium + 30,
        backgroundColor: COLORS.Primary,
        borderBottomRightRadius: SIZES.medium + 20,
        borderBottomLeftRadius: SIZES.medium + 20,

    },
    SearchBar: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,


    },
    option: {
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 18,
    },
})