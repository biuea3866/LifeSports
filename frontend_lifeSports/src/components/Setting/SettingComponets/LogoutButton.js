import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { logout } from '../../../modules/user';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
    const navigation = useNavigation();
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());

        navigation.navigate(
            "Login"
        );
    };

    return(
        <TouchableOpacity
            style={ styles.container }
            onPress={ onLogout }
        >
            <Text
                style={ styles.textColor }
            >
                로그아웃
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
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