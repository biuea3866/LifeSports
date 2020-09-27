import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const SettingBody = () => {
    return(
        <View
            style={ styles.container }
        >
            <Text>
                Body
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.red[3],
    },
});

export default SettingBody;