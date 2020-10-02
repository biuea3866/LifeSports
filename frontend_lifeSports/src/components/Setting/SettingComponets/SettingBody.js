import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingBody = ({ user }) => {
    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.iconLocation }
            >
                <Icon
                    size={ 48 }
                    name='ios-newspaper-outline'
                    color={ palette.blue[4] }
                />
                <Text>
                    공지 사항
                </Text>
            </View>
            <View
                style={ styles.iconLocation }
            >
                <Icon
                    size={ 48 }
                    name='ios-person-circle-outline'
                    color={ palette.blue[4] }
                />
                <Text>
                    내 정보
                </Text>
            </View>
            <View
                style={ styles.iconLocation }
            >
                <Icon
                    size={ 48 }
                    name='ios-document-text-outline'
                    color={ palette.blue[4] }
                />
                <Text>
                    결제 내역
                </Text>
            </View>
            <View
                style={ styles.iconLocation }
            >
                <Icon
                    size={ 48 }
                    name='ios-card-outline'
                    color={ palette.blue[4] }
                />
                <Text>
                    결제 방식
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.white[0],
        borderBottomColor: palette.gray[4],
        borderBottomWidth: 1,
    },
    iconLocation: { 
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    }
});

export default SettingBody;