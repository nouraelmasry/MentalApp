import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


const Categories = () => {
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
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ margin: 10, padding: 10, alignContent: "center" }}>
                <Image source={item.image} style={styles.sliderStyle} />
                <Text style={{ fontFamily: "outfit-medium", marginTop: 10 }}>{item.name}</Text>
            </View>
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