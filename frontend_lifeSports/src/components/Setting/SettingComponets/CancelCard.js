import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { removeRental } from '../../../lib/api/rental';

const CancelCard = ({ item }) => {
    const onPress = async () => {
        try {
            await removeRental(item._id);
        } catch(e) {
            console.log(e)
        }
    };

    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.mapName }
            >
                <Text
                    style={ styles.font }
                >
                    대관 장소 : { item.mapName }
                </Text>
            </View>
            <View
                style={ styles.date }
            >
                <Text
                    style={ styles.font }
                >
                    대관 시간 : { item.date + "   " + item.time }
                </Text>
            </View>
            <View
                style={ styles.amount }
            >
                <Text
                    style={ styles.font }
                >
                    결제 금액 : { item.amount }
                </Text>
            </View>
            <View
                style={ styles.button }
            >
                <TouchableOpacity
                    style={ styles.cancelButton }
                    onPress={ onPress }
                >
                    <Text
                        style={ styles.cancelFont }
                    >
                        대관 취소
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '90%',
        height: 240,
        backgroundColor: palette.white[0],
        margin: 20,
        padding: 20,
    },
    font: {
        fontWeight: 'bold',
        fontSize: 15,
    }, 
    mapName: {
        padding: 10
    },
    date: {
        padding: 10
    },
    amount: {
        padding: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        backgroundColor: palette.blue[4]
    },
    cancelFont: {
        fontWeight: 'bold',
        fontSize: 20,
        color: palette.white[0]
    }
});

export default CancelCard;