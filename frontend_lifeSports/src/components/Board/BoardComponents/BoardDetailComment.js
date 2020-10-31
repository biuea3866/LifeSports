import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const BoardDetailComment = ({ board }) => {
    return(
        <View
            style={ styles.comment }
        >
            <Text>
                { board.comment }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    comment: {
        width: '100%'
    }
});

export default BoardDetailComment;