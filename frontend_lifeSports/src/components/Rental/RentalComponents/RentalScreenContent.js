import React from 'react';
import { StyleSheet, View } from 'react-native';
import palette from '../../../styles/palette';
import RentalContentRuleText from './RentalContentRuleText';
import RentalSetDate from './RentalSetDate';

const RentalScreenContent = () => {
    return(
        <View
            style={ styles.container }
        >
            <RentalContentRuleText/>
            <RentalSetDate/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    }
});

export default RentalScreenContent;