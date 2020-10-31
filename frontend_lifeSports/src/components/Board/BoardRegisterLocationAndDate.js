import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapHeader from '../Map/MapComponents/MapHeader';
import BoardNaverMap from '../Board/BoardComponents/BoardNaverMap';
import { BoardConsumer } from './context/BoardContext';
import BoardMapFooter from './BoardComponents/BoardMapFooter';

const BoardRegisterLocationAndDate = () => {
    return(
        <View
            style={ styles.container }
        >
            <MapHeader/>
            <BoardNaverMap />
            <BoardConsumer>
                {
                    ({ state }) => (
                        state.visible &&
                        <BoardMapFooter />
                    )
                }
            </BoardConsumer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    }
});

export default BoardRegisterLocationAndDate;