import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = () => {
  return (
    <SafeAreaView >
    <View>
      <Header/>
    </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    
})