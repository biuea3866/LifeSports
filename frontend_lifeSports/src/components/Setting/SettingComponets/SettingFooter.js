import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const SettingFooter = () => {

    return(
        <View
            style={ styles.container }
        >
            <Text>
                Footer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.red[0],
    },
});

export default SettingFooter;