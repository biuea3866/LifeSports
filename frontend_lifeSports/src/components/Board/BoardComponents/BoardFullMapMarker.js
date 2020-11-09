import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-nmap';
import palette from '../../../styles/palette';
import markerImage from '../../../../android/app/src/main/assets/img/markerImage.png';

const BoardFullMapMarker = ({ data }) => {
    const coordinate = {
        latitude: data.ycode,
        longitude: data.xcode
    };

    return(
        <View>
            <Marker
                coordinate={ coordinate }
                image={ markerImage }
                pinColor={ palette.blue[4] }
                caption={
                    {
                        text: data.nm,
                        textSize: 15,
                    }
                }
            />
        </View>
    )
};

export default BoardFullMapMarker;