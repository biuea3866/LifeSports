import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { HomeConsumer } from '../context/HomeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const HomeMapFooterHeader = () => {
    return(
        <View
            style={ styles.FooterHeader }
        >
            <View
                style={ styles.typeArea }
            >
                <HomeConsumer>
                    {
                        ({ state }) => (
                            <Text
                                style={ styles.typeFont }
                            >
                                { state.map.type_nm }
                            </Text>
                        )
                    }
                </HomeConsumer>
            </View>
            <HomeConsumer>
                {
                    ({ actions }) => (
                        <TouchableOpacity
                            onPress={ 
                                () => actions.setVisible(false)
                            }
                        >
                            <Icon
                                name={ 'ios-close-sharp' }
                                size={ 25 }
                                color={ palette.blue[4] }
                            />
                        </TouchableOpacity>
                    )
                }
            </HomeConsumer>
        </View>
    )
};

const styles = StyleSheet.create({
    FooterHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        height: '15%',
        marginTop: 10,
        paddingRight: 10
    },
    typeArea: {
        width: '88%',
        marginLeft: 15,
    },
    typeFont: {
        fontWeight: 'bold',
    },
});

export default HomeMapFooterHeader;