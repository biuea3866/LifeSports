import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BoardConsumer } from '../context/BoardContext';
import palette from '../../../styles/palette';

const BoardMapFooterContent = () => {
    return(
        <View
            style={ styles.FooterContent }
        >
            <View
                style={ styles.FooterTitle }
            >
                <BoardConsumer>
                    {
                        ({ state }) => (
                            <Text
                                style={ styles.FooterTitleMain }
                            >
                                { state.map.nm }
                            </Text>
                        )
                    }
                </BoardConsumer>
            </View>
            <View
                style={ styles.FooterTitleSub }
            >
                <BoardConsumer>
                    {
                        ({ state }) => (
                            <Text>
                                { state.map.addr }
                            </Text>
                        )
                    }
                </BoardConsumer>
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

export default BoardMapFooterContent;