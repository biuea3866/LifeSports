import React from 'react';
import { StyleSheet, View } from 'react-native';
import palette from '../../../styles/palette';
import BoardSearchBar from './BoardSearchBar';

const BoardTypeListHeader = () => {
    return(
        <View
            style={ styles.container }
        >
            <BoardSearchBar/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: palette.blue[5],
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BoardTypeListHeader;