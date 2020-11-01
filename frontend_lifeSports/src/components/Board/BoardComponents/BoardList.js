import React from 'react';
import { StyleSheet, View } from 'react-native';
import BoardItem from './BoardItem';

const BoardList = ({ user, loading, error, boardList }) => {
    const DATA = boardList;

    return(
        <View
            style={ styles.container }
        >
            {
                DATA ?
                DATA.map(
                    (item, i) => {
                        return( 
                            <BoardItem 
                                key={ i }
                                user={ user }
                                item={ item }
                            />
                        )
                    }
                ) :
                console.log("Board Loading..")
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '70%'
    }
});

export default BoardList;