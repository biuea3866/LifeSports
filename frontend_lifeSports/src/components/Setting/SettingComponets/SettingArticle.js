import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import RentalItem from './RentalItem';

const SettingArticle = ({ user }) => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.title }
            >
                대여 현황
            </Text>
            <RentalItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: 420,
        height: 300,
        backgroundColor: palette.white[0],
    },
    title: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default SettingArticle;