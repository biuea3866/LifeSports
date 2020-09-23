import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import palette from '../../styles/palette';

const ErrorMessage = ({ text }) => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.message }
            >
                { text }
            </Text>
        </View>
    )
}

const styles = { color } =  StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        margin: 10,
    },
    message: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: palette.red[6],
        fontSize: 15,
        margin: 10,
    }
});

export default ErrorMessage;