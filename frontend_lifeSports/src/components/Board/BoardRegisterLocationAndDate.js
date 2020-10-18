import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapScreen from '../Map/MapScreen';

const BoardRegisterLocationAndDate = () => {
    return(
        <View
            style={ styles.container }
        >
            <MapScreen/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BoardRegisterLocationAndDate;