import React from 'react';
import { StyleSheet, View } from 'react-native';
import palette from '../../../styles/palette';
import BoardMapDetailContentRuleText from './BoardMapDetailContentRuleText';
import BoardMapDetailSetDate from './BoardMapDetailSetDate';

const BoardDetailContent = () => {
    return(
        <View
            style={ styles.container }
        >
            <BoardMapDetailContentRuleText/>
            <BoardMapDetailSetDate/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    }
});

export default BoardDetailContent;