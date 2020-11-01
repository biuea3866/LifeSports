import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingIcon = ({ name }) => {
    return(
        <View>
            <Icon
                name={ name }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default SettingIcon;