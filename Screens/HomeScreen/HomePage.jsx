import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from './Slider'
import Categories from './Categories'

const HomePage = () => {
  return (
    <SafeAreaView >
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Categories />

      </View>

    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({

})