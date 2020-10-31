import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const BoardMapDetailHeader = ({ map }) => {
    
    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.titleArea }
            >
                <Text
                    style={ styles.titleFont }
                >
                    { map.nm }
                </Text>
            </View>
            <View
                style={ styles.subArea }
            >
                <Text>
                    { map.addr }
                </Text>
                <Text>
                    전화번호 : { map.tel }
                </Text>
                <Text>
                    홈페이지 : { map.home_page }
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    titleArea: {
        width: '100%',
        height: 40,
        marginTop: 30,
        marginLeft: 10
    },
    titleFont: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subArea: {
        flexDirection: 'column',
        width: '100%',
        height: 40,
        margin: 10
    },
});

export default BoardMapDetailHeader;