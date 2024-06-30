import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Categories = () => {
    const navigation = useNavigation();
    const Data = [
        {
            id: "01",
            name: "Mood Tracking",
            image: require("../../Assets/Images/Cat2.png"),


        },
        {
            id: "02",
            name: "Mental Quizzes",
            image: require("../../Assets/Images/Cat1.png"),


        },
        {
            id: "03",
            name: "Scan Any Text",
            image: require("../../Assets/Images/Cat3.png"),


        },

    ];

    const handlePress = (name) => {
        if (name === "Mental Quizzes") {
            navigation.push('Quizzes');
        }
        else if (name === "Scan Any Text"){
            navigation.push('OCR');   
        }
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ margin: 10, padding: 10, alignContent: "center" }} onPress={() => handlePress(item.name)}>
                <Image source={item.image} style={styles.sliderStyle} />
                <Text style={{ fontFamily: "outfit-medium", marginTop: 10 }}>{item.name}</Text>
            </TouchableOpacity>
        );

    };
    return (
        <View>
            <Text style={styles.textStyle}>Categories</Text>
            <FlatList data={Data} renderItem={renderItem} horizontal={true} />




        </View>
    )

}
export default Categories;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',

    },
    textStyle: {
        margin: 10,
        fontSize: 20,
        fontFamily: "outfit-medium",

    },
    sliderStyle: {
        height: 60,
        width: 80,
        borderRadius: 10,
        resizeMode: 'contain'



    },

});