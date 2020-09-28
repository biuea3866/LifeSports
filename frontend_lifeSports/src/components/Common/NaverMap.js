import React from 'react';
import { StyleSheet, View } from 'react-native';
import NaverMapView from 'react-native-nmap';

const NaverMap = () => {
    const P0 = {latitude: 37.564362, longitude: 126.977011};

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