import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MapConsumer } from '../context/MapContext';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const MapFooterHeader = () => {
    return(
        <View
            style={ styles.FooterHeader }
        >
            <MapConsumer>
                {
                    ({ actions }) => (
                        <TouchableOpacity
                            onPress={ 
                                () => actions.setVisible(false)
                            }
                        >
                            <Icon
                                name={ 'ios-close-sharp' }
                                size={ 25 }
                                color={ palette.blue[4] }
                            />
                        </TouchableOpacity>
                    )
                }
            </MapConsumer>
        </View>
    )
};

const styles = StyleSheet.create({
    FooterHeader: {
        alignItems: 'flex-end',
        width: '100%',
        height: '15%',
        marginTop: 10,
        paddingRight: 10
    }
});

export default MapFooterHeader;