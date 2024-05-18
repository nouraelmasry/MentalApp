import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from "../../Constants/Colors";

const BookingPage = () => {
    return (
        <View style={styles.container}>
            <Text>Booking page</Text>


        </View>
    )

}
export default BookingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Brown,
        alignItems: 'center',
        justifyContent: 'center',

    },

});

