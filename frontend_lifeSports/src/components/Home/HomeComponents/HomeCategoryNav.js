import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import CategoryIcon from './CategoryIcon';

const HomeCategoryNav = () => {
    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.containerTitle }
            >
                <Text
                    style={ styles.textTitle }
                >
                    운동 공간
                </Text>
            </View>
            <View>
                <CategoryIcon
                    name={ "ios-baseball-outline" }
                    text={ "야구" }
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 140,
        backgroundColor: palette.white[0]
    },
    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    categoryLine: {
        width: 420,
        height: 70
    }
});

export default HomeCategoryNav;