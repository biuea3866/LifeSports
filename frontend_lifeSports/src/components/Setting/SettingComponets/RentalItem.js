import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const RentalItem = () => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.dateFont }
            >
                01/01 ~ 01/01 
            </Text>
            <Text>
                |
            </Text>
            <Text
                style={ styles.locationFont }
            >
                This is your rental location!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 60,
        marginLeft: 30,
        borderRadius: 30,
        backgroundColor: palette.gray[3]
    },
    dateFont: {
        fontWeight: 'bold',
        fontSize: 15
    },
    locationFont: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default RentalItem;