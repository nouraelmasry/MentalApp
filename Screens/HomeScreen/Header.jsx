import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '@clerk/clerk-expo'
import { SIZES } from '../../Constants/Sizes'
import { COLORS } from '../../Constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Header = () => {
    const { user, isLoading } = useUser();
    return user && (

        <View style={styles.container}>

            <View style={styles.profileMain}>
                <View style={styles.profile}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImage}
                    />

                    <View>
                        <Text style={{ color: COLORS.white }}>Welcome</Text>
                        <Text style={{ color: COLORS.white, fontSize: 20, fontFamily: 'outfit' }}>{user?.fullName}</Text>
                    </View>
                </View>
                <Ionicons name="notifications" size={27} color="white" />
            </View>

            <View style={styles.SearchBar}>
                <TextInput placeholder='search' style={styles.textinput} />
                <FontAwesome name="search" size={24} color={COLORS.Primary} style={styles.searchBtn} />
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: SIZES.medium + 20,
        paddingTop: SIZES.medium + 30,
        backgroundColor: COLORS.Primary,
        borderBottomRightRadius: SIZES.medium + 20,
        borderBottomLeftRadius: SIZES.medium + 20,

    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,


    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,


    },
    textinput: {
        padding: SIZES.small + 3,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.bg,
        borderRadius: 10,
        width: '85%',
        fontSize: 18,




    },
    profileMain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'space-between',


    },
    SearchBar: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,


    },
    searchBtn: {
        backgroundColor: COLORS.bg,
        padding: 10,
        borderRadius: 10,


    },
})