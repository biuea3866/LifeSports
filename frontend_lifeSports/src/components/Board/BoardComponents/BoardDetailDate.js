import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const BoardDetailDate = ({ board }) => {
    return(
        <View
            style={ styles.date }
        >
            <Text>
                { board.boardDate }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    date: {
        width: 500,
        height: '10%',
        paddingLeft: 20,
    },
});

export default BoardDetailDate;