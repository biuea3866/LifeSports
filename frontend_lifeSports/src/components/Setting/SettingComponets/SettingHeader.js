import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const SettingHeader = ({ user }) => {
    // console.log(user.email);
    return(
        <View
            style={ styles.container }
        >
            <Text>
                { user.email }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.red[0],
    },
});

export default SettingHeader;