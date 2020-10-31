import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const BoardDetailContent = ({ board }) => {
    return(
        <View
            style={ styles.content }
        >
            <Text>
                { board.boardContent }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        width: '100%',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
    },
});

export default BoardDetailContent;