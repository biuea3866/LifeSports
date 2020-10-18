import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import palette from '../../../styles/palette';

const Homeheader = () => {
    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.titleText }
            >
                Life Sports
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1,
        backgroundColor: palette.white[0]
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: palette.blue[4]
        // 폰트 패밀리 추가
    }
});

export default Homeheader;