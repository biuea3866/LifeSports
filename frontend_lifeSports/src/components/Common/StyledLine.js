import React from 'react';
import { StyleSheet, View } from 'react-native';
import palette from '../../styles/palette';

const StyledLine = () => {
    return(
        <View
            style={ styles.line }
        />
    )
};

const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: '3',
        backgroundColor: palette.gray[4],
    }
});

export default StyledLine;