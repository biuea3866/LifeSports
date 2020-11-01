import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readBoardOne } from '../../../modules/boardOne';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardItem = ({ user, item }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { board, error, loading } = useSelector(({ boardOne, loading }) => ({
        board: boardOne.board,
        error: boardOne.error,
        loading: loading['boards/READ_BOARD']
    }));
    const onPress = e => {
        dispatch(readBoardOne(item._id));

        navigation.navigate("BoardDetail", {
            board: item,
            user: user
        });
    };

    return(
        <TouchableOpacity
            style={ styles.container }
            onPress={ onPress }
        >
            <Text
                style={ styles.title }
            >
                { item.boardTitle }
            </Text>
            <Text
                style={ styles.writer }
            >
                { item.writer }
            </Text>
            <Text
                style={ styles.date }
            >
                { item.date }
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        padding: 10
    },
    title: {
        width: '55%'
    },
    writer: {
        width: '15%'
    },
    date: {
        width: '30%'
    }
});

export default BoardItem;