import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import palette from '../../styles/palette';

const StyledButton = ({ title, name, onPress }) => {
    return(
        <TouchableOpacity
            style={ styles.button }
            name={ name }
            onPress={ onPress }
        >
            <Text
                style={ styles.buttonText}
            >
                { title }
            </Text>
        </TouchableOpacity>
    );
};

const styles = { color } =  StyleSheet.create({
    button :{
        width: 300,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.blue[4],
        margin: 10,
    },
    buttonText: {
        fontSize: 15,
        color: palette.white[0],
    },
});

export default StyledButton;