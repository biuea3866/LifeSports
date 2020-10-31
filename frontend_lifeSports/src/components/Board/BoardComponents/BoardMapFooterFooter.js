import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { BoardConsumer } from '../context/BoardContext';
import { useNavigation } from '@react-navigation/native';

const BoardMapFooterFooter = () => {
    const navigation = useNavigation();
    
    return(
        <View
            style={ styles.FooterFooter }
        >
            <BoardConsumer>
                {
                    ({ state }) => (
                        <TouchableOpacity
                            style={ styles.FooterReservationButton }
                            onPress={
                                () => navigation.navigate("BoardMapDetail", {
                                    name: "BoardMapDetail",
                                    data: state.map
                                })
                            }
                        >
                            <Text
                                style={ styles.FooterReservationText }
                            >
                                대관하기
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </BoardConsumer>
        </View>
    )
};

const styles = StyleSheet.create({
    FooterFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        marginTop: 13,
        paddingRight: 10
    },
    FooterDetailButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderColor: palette.blue[4],
        borderWidth: 3,
        borderRadius: 30
    },
    FooterDetailText: {
        fontWeight: 'bold'
    },
    FooterReservationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderColor: palette.blue[4],
        borderWidth: 3,
        borderRadius: 30
    },
    FooterReservationText: {
        fontWeight: 'bold'
    }
});

export default BoardMapFooterFooter;