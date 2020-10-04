import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import palette from '../../../styles/palette';

const RegisterNav = () => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.titleLabel }
            >
                제목
            </Text>
            <TextInput
                style={ styles.titleInput }
                placeholder="제목을 입력해주세요"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 420,
        height: 100,
        justifyContent: 'flex-start',
        backgroundColor: palette.white[0]
    },
    titleLabel: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    titleInput: {
        width: 370,
        height: 40,
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: palette.gray[3],
        color: palette.black[0]
    }
});

export default RegisterNav;