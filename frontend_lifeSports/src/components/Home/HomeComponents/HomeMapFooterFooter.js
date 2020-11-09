import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import { HomeConsumer } from '../context/HomeContext';
import { useNavigation } from '@react-navigation/native';

const HomeMapFooterFooter = () => {
    const navigation = useNavigation();
    
    return(
        <View
            style={ styles.FooterFooter }
        >
            <HomeConsumer>
                {
                    ({ state }) => (
                        <TouchableOpacity
                            style={ styles.FooterReservationButton }
                            onPress={
                                () => navigation.navigate("대관하기", {
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
            </HomeConsumer>
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

export default HomeMapFooterFooter;