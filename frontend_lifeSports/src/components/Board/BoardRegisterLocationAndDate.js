import React from 'react';
import { StyleSheet, View } from 'react-native';
import BoardNaverMap from '../Map/MapComponents/BoardNaverMap';

const BoardRegisterLocationAndDate = () => {
    return(
        <View
            style={ styles.container }
        >
            <BoardNaverMap/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BoardRegisterLocationAndDate;