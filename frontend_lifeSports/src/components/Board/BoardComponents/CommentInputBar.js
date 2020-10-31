import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import CommentIcon from './CommentIcon';

const CommentInputBar = () => {
    const onPress = e => {
        
    };

    return(
        <View
            style={ styles.container }
        >
            <TextInput
                style={ styles.textContainer }
                placeholder="댓글을 입력해주세요"
                multiline
            />
            <TouchableOpacity
                style={ styles.button }
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