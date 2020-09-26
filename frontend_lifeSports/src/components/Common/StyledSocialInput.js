import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import palette from '../../styles/palette';

const StyledSocialInput = ({  
    value, inputAccessoryViewID, onChange }) => {
    
    return(
        <TextInput
            style={ styles.input }
            inputAccessoryViewID={ inputAccessoryViewID }
            onChange={ onChange }
            value={ value }
        />
    );
}

const styles = StyleSheet.create({
    input :{
        width: 130,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white[0],
        fontSize: 15,
        margin: 10,
    }
});

export default StyledSocialInput;