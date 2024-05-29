import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OcrReports from '../Screens/OCR/OcrReports';
import OCRTasks from '../Screens/OCR/OCRTasks';
import { COLORS } from '../Constants/Colors';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Modal from 'react-native-modal';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();

const OcrNavigation = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
    <Tab.Navigator screenOptions={{headerShown:false,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIndicatorStyle: styles.tabBarIndicator,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "white", 
        tabBarInactiveTintColor: 'white', 
        }} 
        style={{marginTop:60}}>
        <Tab.Screen name='Reports' component={OcrReports}/>
        <Tab.Screen name='Tasks' component={OCRTasks}/>
    </Tab.Navigator>
    <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
        <MaterialIcons name="document-scanner" size={28} color="white" />
        <Text style={{color:COLORS.white, fontFamily:"outfit-bold", fontSize:15}}>Scan</Text>
      </TouchableOpacity>
      <Modal
        isVisible={showModal}
        animationIn="slideInUp" 
        animationOut="slideOutDown" 
        onBackdropPress={closeModal} 
        style={styles.modal} 
      >
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal} >
            <FontAwesome5 name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{fontFamily:"outfit-medium", fontSize:15, marginTop:30}}>Import an image or document to be scanned</Text>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionBtn} >
              <AntDesign name="camerao" size={22} color="white" style={styles.optionBtnIcon}/>
              <Text style={styles.optionBtnText}>Take a picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn} >
              <MaterialCommunityIcons name="view-gallery-outline" size={22} color="white" style={styles.optionBtnIcon}/>
              <Text style={styles.optionBtnText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn} >
            <AntDesign name="pdffile1" size={22} color="white" style={styles.optionBtnIcon} />
            <Text style={styles.optionBtnText}>Import PDF</Text>
            </TouchableOpacity>
          </View>
          
          
        </View>
      </Modal>
    </View>
  );
}

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
      fontFamily:"outfit-bold"
    },
    tabBarIndicator: {
      backgroundColor: "white", 
      height: '100%', 
      borderRadius: 20, 
      opacity:0.3
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
      gap:5
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
      gap: 15
    },
    closeButton: {
      position: 'absolute',
      top: 19,
      right: 19,
    },
    optionsContainer:{
      display: 'flex',
      flexDirection: 'column',
      gap:10
    },
    optionBtn:{
      padding:10,
      backgroundColor:'#9bb169',
      borderWidth:1,
      borderColor:'#9bb169',
      borderRadius:99,
      width:250, 
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center' 
    },
    optionBtnIcon: {
      marginRight: 10 
    },
    optionBtnText: {
      flex: 1,
      fontFamily:'outfit-medium',
      color:"white",
      fontSize:18,
      textAlign: 'center' 
    }
    

  });