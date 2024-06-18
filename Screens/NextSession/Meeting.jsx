import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { SIZES } from '../../Constants/Sizes';
import { COLORS } from '../../Constants/Colors';

const Meeting = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { meetingLink } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment</Text>
      <WebView source={{ uri: meetingLink }} style={styles.webview} />
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnTxt}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Meeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.bg,
  },
  title: {
    fontSize: 24,
    fontFamily: 'outfit-medium',
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
  webview: {
    flex: 1,
  },
  backBtn: {
    backgroundColor: COLORS.Primary,
    padding: 15,
    borderRadius: 15,
    marginTop: SIZES.medium,
    alignItems: 'center',
  },
  backBtnTxt: {
    color: 'white',
    fontFamily: 'outfit-medium',
  },
});
