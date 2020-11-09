import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { useNavigation } from '@react-navigation/native';

const BoardTypeListCard = ({ item, user }) => {
    const navigation = useNavigation();
    const onPress = e => {
        navigation.navigate("BoardDetail", {
            user: user,
            board: item,
        });
    };

    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.date }
            >
                <Text
                    style={ styles.font }
                >
                    제목 : { item.boardTitle }
                </Text>
            </View>
            <View
                style={ styles.amount }
            >
                <Text
                    style={ styles.font }
                >
                    내용 : { item.boardContent }
                </Text>
            </View>
            <View
                style={ styles.button }
            >
                <TouchableOpacity
                    style={ styles.cancelButton }
                    onPress={ onPress }
                >
                    <Text
                        style={ styles.cancelFont }
                    >
                        게시글가기
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '90%',
        height: 240,
        backgroundColor: palette.white[0],
        margin: 20,
        padding: 20,
    },
    font: {
        fontWeight: 'bold',
        fontSize: 15,
    }, 
    mapName: {
        padding: 10
    },
    date: {
        padding: 10
    },
    amount: {
        padding: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        backgroundColor: palette.blue[4]
    },
    cancelFont: {
        fontWeight: 'bold',
        fontSize: 20,
        color: palette.white[0]
    }
});

export default BoardTypeListCard;