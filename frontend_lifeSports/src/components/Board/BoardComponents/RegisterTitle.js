import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';

const RegisterTitle = () => {
    return(
        <View
            style={ styles.container }
        >
            <TouchableOpacity
                style={ styles.completeButton }
            >
                <Text
                    style= { styles.textColor }
                >
                    완료
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
        padding: 20,
    },
    completeButton: {
        width: 70,
        height: 40,
        backgroundColor: palette.blue[4],
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: palette.white[0],
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default RegisterTitle;