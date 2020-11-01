import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readBoardList } from '../../../modules/boardList';
import { StyleSheet, View } from 'react-native';
import palette from '../../../styles/palette';
import BoardBodyFragement from './BoardBodyFragment';

const BoardBody = ({ user }) => {
    const dispatch = useDispatch();
    let togetherList = [];
    let informationList = [];
    const { boardList, error, loading } = useSelector(({ boardList, loading }) => ({
        boardList: boardList.boardList,
        error: boardList.error,
        loading: loading['boards/READ_BOARDLIST']
    }));

    useEffect( () => {
        dispatch(readBoardList())
    }, [dispatch]);

    if(boardList) {
        boardList.map (
            (item) => {
                item.boardType === "together" ?
                togetherList.push(item) :
                informationList.push(item)
            }
        )
    } else {
        return null;
    }

    return(
        <View
            style={ styles.container }
        >
            <BoardBodyFragement
                user={ user }
                boardType={ "together" } 
                text={ "함께해요" }
                boardList={ togetherList }
                loading={ loading }
                error={ error }
            />
            <BoardBodyFragement
                user= { user } 
                boardType={ "information" }
                text={ "도와주세요" }
                boardList={ informationList }
                loading={ loading }
                error={ error }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white[0]
    },
});

export default BoardBody