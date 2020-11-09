import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerBoard } from '../../../modules/boards';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { BoardConsumer } from '../context/BoardContext';
import { useNavigation } from '@react-navigation/native';

function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

const RegisterTitle = ({ user }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        boardType,
        peopleRestrict,
        boardTitle,
        boardContent,
        userId,
        writer,
        boardDate,
        comment,
        money,
        mapId,
        date,
        time,
        closingYn,
        board,
        boardError
    } = useSelector(
        ({ board }) => ({
            boardType: board.boardType,
            peopleRestrict: board.peopleRestrict,
            boardTitle: board.boardTitle,
            boardContent: board.boardContent,
            userId: user._id,
            writer: board.writer,
            boardDate: getToday(),
            money: [],
            mapId: board.mapId,
            date: board.date,
            time: board.time,
            closingYn: false,
            board: board.board,
            boardError: board.boardError,
        })
    );

    const onPress = e => {
        dispatch(registerBoard({
            boardType,
            peopleRestrict,
            boardTitle,
            boardContent,
            userId,
            writer,
            boardDate,
            comment,
            money,
            mapId,
            date,
            time,
            closingYn
        }))

        navigation.navigate("Board")
    };

    useEffect( () => {
        if(board) {
            console.log(board);
        }
        if(boardError) { 
            console.log(boardError)
        }
    }, [board, boardError]);

    return(
        <View
            style={ styles.container }
        >
            <BoardConsumer>
                {
                    ({ state }) => (
                        <TouchableOpacity
                            style={ styles.completeButton }
                            onPress={ onPress }
                        >
                            <Text
                                style= { styles.textColor }
                            >
                                완료
                            </Text>
                        </TouchableOpacity>
                    )
                }    
            </BoardConsumer>      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 420,
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
        padding: 20,
    },
    completeButton: {
        width: 70,
        height: 40,
        backgroundColor: palette.blue[4],
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: palette.white[0],
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default RegisterTitle;