import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import BoardTypeListHeader from './BoardTypeListHeader';
import BoardTypeListCard from './BoardTypeListCard';
import { useRoute } from '@react-navigation/native';

const BoardTypeList = () => {
    const route = useRoute();

    return(
        <ScrollView
            style={ styles.container }
        >
            <BoardTypeListHeader/>
            {
                route.params.boardList.map(
                    (item, i) => {
                        return(
                            <BoardTypeListCard
                                key={ i }
                                item={ item }
                                user={ route.params.user }
                            />
                        )
                    } 
                )
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BoardTypeList;