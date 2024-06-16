import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OcrReports from '../Screens/OCR/OcrReports';
import OCRTasks from '../Screens/OCR/OCRTasks';
import { COLORS } from '../Constants/Colors';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import axios from 'axios';
import { TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const Tab = createMaterialTopTabNavigator();
const LANG_ENGLISH = 'eng';

const OcrNavigation = () => {
  const [imagePreviewModalVisible, setImagePreviewModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [ocrText, setOcrText] = useState('');

  const ocrSpaceApiKey = '8d6aca4f3588957'; // Replace with your OCR.space API key


  const closeImagePreviewModal = () => {
    setImagePreviewModalVisible(false);
  };
  const openImagePreviewModal = () => {
    setImagePreviewModalVisible(true);
  };


  const handleImagePicker = async () => {
    let result;
    try{
     
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });
    

    console.log('Image Picker Result:', result);


    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      console.log('Image URI:', uri);

      openImagePreviewModal();

      // OCR process
      const formData = new FormData();
      const uriParts = uri.split('.'); // Split by '.' to get file extension
      const fileType = uriParts[uriParts.length - 1]; // Get the file extension

      formData.append('file', {
        uri: uri,
        type: `image/${fileType}`, // Set content type dynamically
        name: `image.${fileType}`, // Set name with file extension
      });

      const ocrUrl = `https://api.ocr.space/parse/image`;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': ocrSpaceApiKey,
        },
        params: {
          apikey: ocrSpaceApiKey,
          language: LANG_ENGLISH,
          isOverlayRequired: true,
        },
      };

      try {
        const response = await axios.post(ocrUrl, formData, config);

        if (response.data && response.data.ParsedResults && response.data.ParsedResults.length > 0) {
          setOcrText(response.data.ParsedResults[0].ParsedText);
        } else {
          setOcrText('No text found');
        }
      } catch (error) {
        console.error('Error recognizing text:', error);
        if (error.response) {
          console.log('Response data:', error.response.data);
        }
        setOcrText('Error recognizing text');
      }
    }
  } catch (error) {
    console.error('Error picking image:', error);
  }

  };

  

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        }}
        style={{ marginTop: 60 }}
      >
        <Tab.Screen name="Reports" component={OcrReports} />
        <Tab.Screen name="Tasks" component={OCRTasks} />
      </Tab.Navigator>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>handleImagePicker()}>
        <MaterialIcons name="document-scanner" size={28} color="white" />
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>
      

      <Modal
  isVisible={imagePreviewModalVisible}
  animationIn="slideInUp"
  animationOut="slideOutDown"
  onBackdropPress={closeImagePreviewModal}
  style={styles.fullScreenModal}
>
<KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
  <View style={styles.fullScreenModalContent}>
    
    <TouchableOpacity style={styles.closeButton} onPress={closeImagePreviewModal}>
      <FontAwesome5 name="chevron-down" size={24} color="black" />
    </TouchableOpacity>
    <TextInput style={styles.inputField}
  placeholder="Document title"
  placeholderTextColor="gray"/>
    <Text style={styles.modalText}>Image Preview</Text>
    {imageUri && <Image source={{ uri: imageUri }} style={styles.previewImage} />}
    <View style={styles.scrollViewContainer}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.ocrText}>{ocrText ? ocrText : 'No text found'}</Text>
    </ScrollView>
    </View>
    <TouchableOpacity style={styles.saveBtn}>
      <Text style={styles.saveTxt}>Save</Text>
    </TouchableOpacity>
  </View>
  </KeyboardAwareScrollView>

</Modal>
    
    </View>
  );
};

export default OcrNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.Primary,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  tabBarLabel: {
    fontSize: 14,
    fontFamily: 'outfit-bold',
  },
  tabBarIndicator: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 20,
    opacity: 0.3,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.Primary,
    borderRadius: 30,
    width: 110,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'outfit-bold',
    fontSize: 15,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  closeButton: {
    position: 'absolute',
    top: 19,
    right: 19,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  optionBtn: {
    padding: 10,
    backgroundColor: '#9bb169',
    borderWidth: 1,
    borderColor: '#9bb169',
    borderRadius: 99,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionBtnIcon: {
    marginRight: 10,
  },
  optionBtnText: {
    flex: 1,
    fontFamily: 'outfit-medium',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  fullScreenModal: {
    justifyContent: 'center',
    margin: 20,
    flex: 1,
  },
  fullScreenModalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 19,
    right: 19,
  },
  modalText: {
    fontFamily: 'outfit-medium',
    fontSize: 14,
    marginTop: 30,
  },
  previewImage: {
    width: 300,
    height: 200, // Adjust height to take up most of the screen
    resizeMode: 'contain',
    marginVertical: 10,
  },
  scrollViewContainer: {
    backgroundColor:"#f2f2f2",
    // flex: 1,
    width: '100%', // Ensure the ScrollView container takes full width of its parent
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10, // Adjust padding as needed
  },
  scrollViewContent: {
    width: '100%', // Ensure the content inside ScrollView also takes full width
    alignItems: 'center',
  },
  ocrText: {
    fontFamily: 'outfit-medium',
    fontSize: 15,
    textAlign: 'left', // Left-justify text
    maxWidth: '100%', // Ensure text doesn't overflow horizontally
    marginTop: 10,
    flexShrink: 1, // Allow text to shrink if needed to fit the width
    flexWrap: 'wrap', // Allow text to wrap to the next line if needed
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'lightgray', // Border color
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#f2f2f2', // Light gray background color
    fontFamily: 'outfit-medium',
    fontSize: 16,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  saveBtn:{
    paddingHorizontal:24,
    paddingVertical:12,
    marginTop:20,
    backgroundColor:COLORS.Primary,
    borderRadius:15,
    width: 150,
    alignItems: 'center',
  },
  saveTxt: {
    fontFamily: 'outfit-medium',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
