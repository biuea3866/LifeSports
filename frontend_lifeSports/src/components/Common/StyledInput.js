import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import palette from '../../styles/palette';

const StyledTextInput = ({ placeholder, 
    placeholderTextColor, value, inputAccessoryViewID,
    secureTextEntry, onChange }) => {
    return(
        <TextInput
            inputAccessoryViewID={ inputAccessoryViewID }
            style={ styles.input }
            placeholder={ placeholder }
            placeholderTextColor={ placeholderTextColor }
            secureTextEntry= { secureTextEntry }
            onChange={ onChange }
            value={ value }
            
        />
    );
};

const styles = { color } =  StyleSheet.create({
    input :{
        width: 300,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white[0],
        fontSize: 15,
        margin: 10,
    }
});

export default StyledTextInput;