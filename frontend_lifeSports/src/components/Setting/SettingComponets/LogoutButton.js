import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const LogoutButton = () => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.textColor }
            >
                로그아웃
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 60,
        borderRadius: 30,
        borderColor: palette.blue[4],
        borderWidth: 2,
        backgroundColor: palette.white[0],
        marginTop: 10
    },
    textColor: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.blue[4]
    }
});

export default LogoutButton;