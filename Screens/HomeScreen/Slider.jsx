import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { COLORS } from "../../Constants/Colors";
import L1 from "../../Assets/Images/L1.jpeg";
import Login2 from "../../Assets/Images/Login2.jpeg";
import Login3 from "../../Assets/Images/Login3.jpeg";
import { SIZES } from "../../Constants/Sizes";


const Slider = () => {
    const Data = [
        {
            id: "01",
            image: require("../../Assets/Images/Slider2.jpeg"),


        },
        {
            id: "02",
            image: require("../../Assets/Images/Slider1.jpeg"),


        },
        {
            id: "03",
            image: require("../../Assets/Images/Slider3.jpeg"),


        },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ margin: 10 }}>
                <Image source={item.image} style={styles.sliderStyle} />
            </View>
        );

    };


    return (
        <View>
            <Text style={styles.textStyle}>What We Offer</Text>
            <FlatList data={Data} renderItem={renderItem} horizontal={true} />


        </View>
    )

}
export default Slider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sliderStyle: {
        height: 150,
        width: Dimensions.get("screen").width - 150,
        borderRadius: 10,

    },
    textStyle: {
        margin: 10,
        fontSize: 20,
        fontFamily: "outfit-medium",

    },

});