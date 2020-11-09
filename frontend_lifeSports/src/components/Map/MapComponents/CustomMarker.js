import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-nmap';
import palette from '../../../styles/palette';
import markerImage from '../../../../android/app/src/main/assets/img/markerImage.png';
import { MapConsumer } from '../context/MapContext';

/*  2020 - 09 - 28 (Mon)
*  Writer: 조봉준
*  
*  [ NaverMap API Marker ]  
*  
*/
const CustomMarker = ({ data }) => {
    const coordinate = {
        latitude: data.ycode,
        longitude: data.xcode
    };

    return(
        <View>
            <MapConsumer>
                {({ actions }) => (
                    <Marker
                        coordinate={ coordinate }
                        image={ markerImage }
                        pinColor={ palette.blue[4] }
                        caption={
                            {
                                text: data.nm,
                                textSize: 13,
                            }
                        }
                        onClick={ 
                            () => {
                                actions.setVisible(true)
                                actions.setMap(data)
                            }
                        }
                    />
                )}
            </MapConsumer>
        </View>
    )
};

export default CustomMarker;