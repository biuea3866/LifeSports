import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readBoardOne } from '../../../modules/boardOne';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
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
    const id = route.params.id;
    const dispatch = useDispatch();
    const { board, error, loading } = useSelector(({ boardOne, loading }) => ({
        board: boardOne.board,
        error: boardOne.error,
        loading: loading['boards/READ_BOARD']
    }));

    useEffect( () => {
        dispatch(readBoardOne(id))
    }, [dispatch, id]);

    console.log(board);
    return(
        <ScrollView
            style={ styles.container }
        >
            <BoardDetailWriter board={ board } />
            <BoardDetailDate board={ board } />
            <BoardDetailTitle board={ board } />
            <BoardDetailContent board={ board } />
            <BoardDetailComment board={ board } />
            <CommentInputBar/>
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