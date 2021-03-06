import React from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../../../modules/boards';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import palette from '../../../styles/palette';

const RegisterContent = () => {
    const dispatch = useDispatch();
    const onChange = e => {
        const value = e.nativeEvent.text;
        
        dispatch(
            changeField({
                key: 'boardContent',
                value: value
            })
        );
    };

    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.contentLabel }
            >
                내용
            </Text>
            <TextInput
                style={ styles.contentInput }
                placeholder="내용을 입력해주세요"
                multiline
                onChange={ onChange }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 420,
        height: 600,
        justifyContent: 'flex-start',
        backgroundColor: palette.white[0],
    },
    contentLabel: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    contentInput: {
        width: 370,
        height: 500,
        textAlignVertical: 'top',
        marginLeft: 20,
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: palette.gray[3],
        color: palette.black[0]
    }
});

export default RegisterContent;