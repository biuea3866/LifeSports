import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const MileageComponent = () => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.textColor }
            >
                마일리지
            </Text>
            <Text
                style={ styles.mileageText }
            >
                1000
            </Text>
            <Text
                style={ styles.pointLocation }
            >
                P
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 350,
        height: 60,
        borderRadius: 30,
        paddingLeft: 40,
        backgroundColor: palette.blue[4]
    },
    textColor: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0]
    },
    mileageText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0],
        paddingLeft: 175
    },
    pointLocation: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0],
        paddingLeft: 5
    }
});

export default MileageComponent;