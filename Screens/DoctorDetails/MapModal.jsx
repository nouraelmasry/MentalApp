import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Location from 'expo-location';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const MapModal = ({ hideModal, clinicLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const userCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(userCoords);

      if (location && clinicLocation) {
        fetchRoute(userCoords, clinicLocation);
      }
    })();
  }, [clinicLocation]);

  const fetchRoute = async (userCoords, clinicCoords) => {
    try {
      const apiKey = '5b3ce3597851110001cf6248499591f6dffd417aa844a348d7536a74'; // Replace with your API key
      const response = await axios.get(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${userCoords.longitude},${userCoords.latitude}&end=${clinicCoords.longitude},${clinicCoords.latitude}`
      );

      const points = response.data.features[0].geometry.coordinates.map(coord => ({
        latitude: coord[1],
        longitude: coord[0],
      }));
      setRouteCoordinates(points);

      // Adjust the map to show the entire route
      if (mapRef.current) {
        mapRef.current.fitToCoordinates([userCoords, clinicCoords, ...points], {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      }
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.backBtnContainer} onPress={hideModal}>
        <Ionicons name='arrow-back-outline' size={30} color='black' />
        <Text style={{ fontSize: 25, fontFamily: 'outfit-medium' }}>Location</Text>
      </TouchableOpacity>
      {userLocation && clinicLocation && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={userLocation}
            title="Your Location"
          />
          <Marker
            coordinate={clinicLocation}
            title="Clinic Location"
          />
          {routeCoordinates.length > 0 && (
            <Polyline
              coordinates={routeCoordinates}
              strokeColor="red"
              strokeWidth={6}
            />
          )}
        </MapView>
      )}
    </View>
  );
};

export default MapModal;

const styles = StyleSheet.create({
  backBtnContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  map: {
    marginTop:60,
    width: width,
    height: height-60,
  },
});
