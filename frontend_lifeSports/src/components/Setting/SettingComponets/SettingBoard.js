import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardListById } from '../../../modules/boardListById';
import { StyleSheet, ScrollView } from 'react-native';
import BoardCard from './BoardCard';
import { useRoute } from '@react-navigation/native';

const SettingBoard = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { boards, error, loading } = useSelector(({ boards, loading }) => ({
        boards: boards.boards,
        error: boards.error,
        loading: loading['boards/BOARDLIST_BY_ID']
    }));
    useEffect( () => {
        dispatch(boardListById(route.params.user._id))
    }, [dispatch, route.params.user._id]);

    return(
        <ScrollView
            style={ styles.container }
        >
            {
                boards ?
                boards.map(
                    (item, i) => {
                        return(
                            <BoardCard 
                                key={ i }
                                item={ item }
                                user={ route.params.user }
                            />
                        )
                    }
                )
                :
                console.log("boards Loading..")
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SettingBoard;