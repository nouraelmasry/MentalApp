import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '@clerk/clerk-expo'

const Header = () => {
    const {user, isLoading } =useUser();
  return (
    <View>
        <View>
            <Image source={{uri:user?.imageUrl}}
            style={styles.userImage}
            />
        </View>      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    userImage:{
        width:45,
        height:45,
    }
})