import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from './Slider'
import Categories from './Categories'
import BottomSlider from './BottomSlider'

const HomePage = () => {
  return (
    <SafeAreaView >
      <ScrollView>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Categories />
        <BottomSlider/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({

})