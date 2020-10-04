import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react-redux';
import NaverMapView from 'react-native-nmap';
import MapHeader from './MapHeader';

/*  2020 - 09 - 28 (Mon)
*  Writer: 조봉준
*  
*  [ NaverMap API ]  
*  
*/
const BoardNaverMap = () => {
    // 추후에 현재위치 표시
    const defaultLocation = {latitude: 37.6009735 , longitude: 126.9484764};
   
    return(
        <View
            style={ styles.MapContainer }
        >
           <MapHeader/>
           <NaverMapView
                style={ styles.MapViewContainer }
                showsMyLocationButton={ true }
                center={
                    {
                        ...defaultLocation,
                        zoom: 16
                    }
                }
                scaleBar={ true }
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    MapContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    MapViewContainer: {
        width: '100%',
        height: '85%'
    }
});

export default BoardNaverMap;