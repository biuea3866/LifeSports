import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const MileageComponent = ({ user }) => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.textColor }
            >
                포인트
            </Text>
            <View
                style={ styles.mileageLocation }
            >
                <Text
                    style={ styles.mileageText }
                >
                    { user.point }
                </Text>
            </View>
            <View
                style={ styles.pointLocation }
            >
                <Text
                    style={ styles.pointFont }
                >
                    P
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 350,
        height: 50,
        borderRadius: 30,
        paddingLeft: 40,
        backgroundColor: palette.blue[4]
    },
    textColor: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0]
    },
    mileageLocation: {
        width: '77%'
    },
    mileageText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0],
        paddingLeft: 175
    },
    pointLocation: {
        width: '10%',
        paddingLeft: 5
    },
    pointFont: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0],
    }
});

export default MileageComponent;