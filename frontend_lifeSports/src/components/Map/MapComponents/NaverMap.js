import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react-redux';
import NaverMapView from 'react-native-nmap';
import Geolocation from '@react-native-community/geolocation';

/*  2020 - 09 - 28 (Mon)
*  Writer: 조봉준
*  
*  [ NaverMap API ]  
*  
*/
const NaverMap = () => {
    const P0 = {latitude: 37.564362, longitude: 126.977011};
    const [currentLongitude, setCurrentLongitude] = useState('');
    const [currentLatitude, setCurrentLatitude] = useState('');
    const userPosition = {
        latitude: 0,
        longitude: 0
    };

    Geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
        //getting the Longitude from the location json
            setCurrentLongitude((position.coords.longitude));
            //getting the Latitude from the location json
            setCurrentLatitude((position.coords.latitude));

            userPosition.latitude = currentLatitude;
            userPosition.longitude = currentLongitude;
        }, 
        (error) => {
            alert(error.message)
        }, 
        {
            enableHighAccuracy: false,
            maximumAge: 1000 
        },
    );

    return(
        <NaverMapView
            style={ styles.MapContainer }
            showsMyLocationButton={ true }
            center={
                {
                    ...P0,
                    zoom: 16
                }
            }
            scaleBar={ true }
        />
    )
}

const styles = StyleSheet.create({
    MapContainer: {
        width: '100%',
        height: '100%',
    }
});

export default NaverMap;