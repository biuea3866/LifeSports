import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import CommentIcon from './CommentIcon';
import { useSelector, useDispatch } from 'react-redux';
import { writeComment, changeField } from '../../../modules/comment';

function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

const CommentInputBar = ({ user, board }) => {
    const clear = useRef(null);
    const dispatch = useDispatch();
    const { 
        userId,
        boardId, 
        contents,
        author, 
        commentDate,
        comment,
        commentError
    } = useSelector(({ comment }) => ({
        userId: user._id,
        boardId: board._id, 
        contents: comment.contents,
        author: user.nickName, 
        commentDate: getToday(),
        comment: comment.comment,
        commentError: comment.commentError
    }));
    
    const onPress = e => {
        dispatch(writeComment({ userId, boardId, contents, author, commentDate }));

        clear.current.clear();
    };

    const onChange = e => {
        const value = e.nativeEvent.text;
        
        dispatch(
            changeField({
                key: 'contents',
                value: value
            })
        );
    };

    if(commentError) {
        console.log(commentError)
    }

    return(
        <View
            style={ styles.container }
        >
            <TextInput
                style={ styles.textContainer }
                placeholder="댓글을 입력해주세요"
                multiline
                onChange={ onChange }
                ref={ clear }
            />
            <TouchableOpacity
                style={ styles.button }
                onPress={ onPress }
            >
                <CommentIcon />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        bottom: 20,
        left: 5,
        position: 'absolute',
        backgroundColor: palette.gray[3],
        borderRadius: 20,
    },
    textContainer: {
        width: '85%',
        height: 40,
    },
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        right: 10,
    }
});

export default CommentInputBar;