import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import BoardList from './BoardList';

const BoardBodyFragment = ({ boardType, text, boardList, loading, error }) => {

    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.TitleFont }
            >
                { text }
            </Text>
            <View
                style={ styles.content }
            >
                <BoardList 
                    loading={ loading }
                    error={ error }
                    boardList={ boardList }
                /> 
            </View>
            <View
                style={ styles.footer }
            >
                <TouchableOpacity>
                    <Text>
                        전체 보기
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
        backgroundColor: palette.white[0]
    },
    Title: {
        width: '100%',
        height: '10%',
        backgroundColor: palette.white[0]
    },
    TitleFont: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 20,
    },
    content: {
        width: '100%',
        height: '70%',
        backgroundColor: palette.white[0]
    },
    footer: {
        alignItems: 'flex-end',
        width: '100%',
        height: '10%',
        paddingRight: 20,
        backgroundColor: palette.white[0]
    }
});

export default BoardBodyFragment;