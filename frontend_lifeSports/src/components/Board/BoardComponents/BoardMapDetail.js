import React ,{ useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../../modules/boards';
import { 
    StyleSheet, 
    ScrollView
} from 'react-native';
import BoardMapDetailHeader from './BoardMapDetailHeader';
import BoardMapDetailNav from './BoardMapDetailNav';
import BoardMapDetailContent from './BoardMapDetailContent';
import BoardMapDetailFooter from './BoardMapDetailFooter';
import { BoardProvider, BoardConsumer } from '../context/BoardContext';
import { useRoute } from '@react-navigation/native';

const BoardMapDetail = ({ user }) => {
    const dispatch = useDispatch();
    const route = useRoute();
    const { date, time, map } = useSelector(({ board }) => ({
        date: board.date,
        time: board.time,
        map: board.map
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    return(
        <BoardProvider>
            <ScrollView
                style={ styles.container }
            >
                <BoardMapDetailHeader
                    map={ route.params.data }
                />
                <BoardMapDetailNav
                    map={ route.params.data }
                />
                <BoardMapDetailContent/>
                <BoardConsumer>
                    {
                        ({ state }) => (
                            <BoardMapDetailFooter
                                onChangeField={ onChangeField }
                                user={ user } 
                                date={ state.date }
                                time={ state.time }
                                map={ route.params.data }
                            />
                        )
                    }
                </BoardConsumer>
            </ScrollView>
        </BoardProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BoardMapDetail;