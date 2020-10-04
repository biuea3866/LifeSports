import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const BoardBody = () => {
    return(
        <View
            style={ styles.container }
        >
            {/* FlatList 추가 */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        backgroundColor: palette.white[0]
    }
});

export default BoardBody