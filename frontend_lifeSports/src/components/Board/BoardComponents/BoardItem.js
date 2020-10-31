import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BoardItem = ({ id, title, writer, date }) => {
    const navigation = useNavigation();
    const onPress = e => {
        navigation.navigate("BoardDetail", {
            id: id
        })
    };

    return(
        <TouchableOpacity
            style={ styles.container }
            onPress={ onPress }
        >
            <Text
                style={ styles.title }
            >
                { title }
            </Text>
            <Text
                style={ styles.writer }
            >
                { writer }
            </Text>
            <Text
                style={ styles.date }
            >
                { date }
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        padding: 10
    },
    title: {
        width: '55%'
    },
    writer: {
        width: '15%'
    },
    date: {
        width: '30%'
    }
});

export default BoardItem;