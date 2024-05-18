import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useUser } from "@clerk/clerk-expo";

const HomePage = () => {
    const { user, isLoading } = useUser();
    return user && (
        <View>
            <View style={{ alignContent: "center", padding: 100, alignItems: 'center' }}>
                <Image source={{ uri: user?.imageUrl }} style={{ width: '45', height: '45', borderRadius: 99 }} />
            </View>

        </View>

    )

}
export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },


});
