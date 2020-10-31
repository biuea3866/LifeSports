import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoardDetailTitle = ({ board }) => {
    return(
        <View
            style={ styles.title }
        >
            <Text
                style={ styles.titleFont }
            >
                { board.boardTitle }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        width: '100%',
        paddingLeft: 20,
    },
    titleFont: {
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default BoardDetailTitle;