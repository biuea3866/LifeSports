import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import RentalItem from './RentalItem';

const SettingArticle = ({ rentals }) => {
    return(
        <ScrollView
            style={ styles.container }
        >
            {
                rentals ?
                rentals.map(
                    (item, i) => {
                        return(
                            <RentalItem
                                key={ i }
                                item={ item }
                            />
                        )
                    }
                ) :
                console.log("Loading RentalList")
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 210,
        position: 'absolute',
        bottom: 150,
        backgroundColor: palette.white[0],
    },
    title: {
        position: 'absolute',
        bottom: 180
    },
    titleFont: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export default SettingArticle;