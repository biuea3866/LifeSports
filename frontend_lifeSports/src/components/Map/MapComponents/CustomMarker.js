import React from 'react';
import { StyleSheet } from 'react-native';
import { Marker } from 'react-native-nmap';
import palette from '../../../styles/palette';
import markerImage from '../../../../android/app/src/main/assets/img/markerImage.png';

/*  2020 - 09 - 28 (Mon)
*  Writer: 조봉준
*  
*  [ NaverMap API Marker ]  
*  
*/

const CustomMarker = () => {
    return(
        <Marker
            pinColor={ palette.blue[4] }
            image={ markerImage }
        />
    )
};

export default CustomMarker;