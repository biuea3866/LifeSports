import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import BoardMapDetailNavIcon from './BoardMapDetailNavIcon';

const BoardMapDetailNav = ({ map }) => {
    return(
        <View
            style={ styles.container }
        >
            {/* 실내, 주차, 교육 */}
            <View
                style={ styles.IconArea }
            >
                <BoardMapDetailNavIcon
                    name={ "ios-car" }
                />
                {
                    map.parking_lot == '주차 가능' ?
                    <Text
                        style={ styles.IconText }
                    >
                        주차 가능
                    </Text> :
                    <Text
                        style={ styles.IconText }
                    >
                        주차 불가
                    </Text>
                }
            </View>
            <View
                style={ styles.IconArea }
            >
                <BoardMapDetailNavIcon
                    name={ "ios-home" }
                />
                {
                    map.in_out == '실내' ?
                    <Text
                        style={ styles.IconText }
                    >
                        실내
                    </Text> :
                    <Text
                        style={ styles.IconText }
                    >
                        야외
                    </Text>
                }
            </View>
            <View
                style={ styles.IconArea }
            >
                <BoardMapDetailNavIcon
                    name={ "ios-person" }
                />
                {
                    map.edu_yn == '유' ?
                    <Text
                        style={ styles.IconText }
                    >
                        교육 가능
                    </Text> :
                    <Text
                        style={ styles.IconText }
                    >
                        교육 불가
                    </Text>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[3],
        borderBottomWidth: 1
    },
    IconArea: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconText: {
        fontWeight: 'bold'
    }
});

export default BoardMapDetailNav;