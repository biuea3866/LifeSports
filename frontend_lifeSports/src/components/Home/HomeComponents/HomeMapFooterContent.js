import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HomeConsumer } from '../context/HomeContext';
import palette from '../../../styles/palette';

const HomeMapFooterContent = () => {
    return(
        <View
            style={ styles.FooterContent }
        >
            <View
                style={ styles.FooterTitle }
            >
                <HomeConsumer>
                    {
                        ({ state }) => (
                            <Text
                                style={ styles.FooterTitleMain }
                            >
                                { state.map.nm }
                            </Text>
                        )
                    }
                </HomeConsumer>
            </View>
            <View
                style={ styles.FooterTitleSub }
            >
                <HomeConsumer>
                    {
                        ({ state }) => (
                            <Text>
                                { state.map.addr }
                            </Text>
                        )
                    }
                </HomeConsumer>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    FooterContent: {
        width: '100%',
        height: '55%',
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    FooterTitle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 15
    },
    FooterTitleMain: {
        fontWeight: 'bold',
        fontSize: 20
    },
    FooterTitleSub: {
        justifyContent: 'flex-start',
        marginLeft: 15,
    },
});

export default HomeMapFooterContent;