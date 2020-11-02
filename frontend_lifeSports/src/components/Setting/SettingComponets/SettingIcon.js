import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingIcon = ({ name, text }) => {
    return(
        <View
            style={ styles.container }
        >
            <Icon
                name={ name }
                size={ 48 }
                color={ palette.blue[4] }
            />
            <Text>
                { text }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingIcon;