import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from './Slider'

const HomePage = () => {
  return (
    <SafeAreaView >
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />

      </View>

    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({

})