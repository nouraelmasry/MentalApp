import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from "../../Constants/Colors";
import L1 from "../../Assets/Images/L1.jpeg";
import Login2 from "../../Assets/Images/Login2.jpeg";
import Login3 from "../../Assets/Images/Login3.jpeg";
import { SIZES } from "../../Constants/Sizes";
import { useNavigation } from '@react-navigation/native'; // Import navigation hook


const BottomSlider = () => {
    const navigation = useNavigation();

    const Data = [
        {
            id: "01",
            image: require("../../Assets/Images/nextSessionimg.png"),
            screenName: "NextSession",


        },
        {
            id: "02",
            image: require("../../Assets/Images/Slider1.jpeg"),
            screenName: "someothersesh1",

        },
        {
            id: "03",
            image: require("../../Assets/Images/Slider3.jpeg"),
            screenName: "someothersesh2",

        },
    ];
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={() => handlePress(item.screenName)}>
                    <Image source={item.image} style={styles.sliderStyle} />
                </TouchableOpacity>
            </View>
        );

    };

    const handlePress = (screenName) => {
        navigation.push(screenName); // Navigate to the specified screen
    };

  return (
    <View>
            <Text style={styles.textStyle}>Remember</Text>
            <FlatList data={Data} renderItem={renderItem} horizontal={true} />


        </View>
  )
}

export default BottomSlider

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
})