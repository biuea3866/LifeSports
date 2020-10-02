import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import MileageComponent from './MileageComponent';
import LogoutButton from './LogoutButton';

const SettingFooter = () => {

    return(
        <View
            style={ styles.container }
        >
            <MileageComponent/>
            <LogoutButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.white[0],
    },
});

export default SettingFooter;