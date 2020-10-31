import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoardDetailWriter = ({ board }) => {
    return(
        <View
            style={ styles.writer }
        >
            <Text
                style={ styles.writerFont }
            >
                { board.writer }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    writer: {
        width: '100%',
        height: '10%',
        padding: 20
    },
    writerFont: {
        fontWeight: '200',
        fontSize: 20
    },
});

export default BoardDetailWriter;