import React from 'react';
import { StyleSheet, ScrollView, } from 'react-native';
import palette from '../../../styles/palette';
import { useRoute } from '@react-navigation/native';
import BoardDetailWriter from './BoardDetailWriter';
import BoardDetailDate from './BoardDetailDate';
import BoardDetailTitle from './BoardDetailTitle';
import BoardDetailContent from './BoardDetailContent';
import BoardDetailComment from './BoardDetailComment';
import CommentInputBar from './CommentInputBar';

const BoardDetail = () => {
    const route = useRoute();
    const board = route.params.board;
    const user = route.params.user;

    console.log(board);
    return(
        <ScrollView
            style={ styles.container }
        >
            <BoardDetailWriter board={ board } />
            <BoardDetailDate board={ board } />
            <BoardDetailTitle board={ board } />
            <BoardDetailContent board={ board } />
            <BoardDetailComment 
                user={ user }
                board={ board } 
            />
            <CommentInputBar 
                user={ user }
                board={ board }
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: palette.white[0]
    },
});

export default BoardDetail;