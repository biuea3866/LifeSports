import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import palette from '../../../styles/palette';
import SettingIcon from './SettingIcon';
import { useNavigation } from '@react-navigation/native';

const SettingBody = ({ user, rentals }) => {
    const navigation = useNavigation();

    const onPressMyPage = e => {

    };

    const onPressBoard = e => {
        
    };

    const onPressPayment = e => {

    };

    const onPressCancel = e => {
        navigation.navigate("Cancel", {
            rentals: rentals
        })
    };

    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.iconLocation }
            >
                <TouchableOpacity>
                    <SettingIcon
                        name={ 'ios-person-circle-outline' }
                        text={ "정보" }
                    />
                </TouchableOpacity>
            </View>
            <View
                style={ styles.iconLocation }
            >
                <TouchableOpacity>
                    <SettingIcon
                        name={ 'ios-person-circle-outline' }
                        text={ "게시글" }
                    />
                </TouchableOpacity>
            </View>
            <View
                style={ styles.iconLocation }
            >
                <TouchableOpacity>
                    <SettingIcon
                        name={ 'ios-document-text-outline' }
                        text={ "결제내역" }
                    />
                </TouchableOpacity>
            </View>
            <View
                style={ styles.iconLocation }
            >
                <TouchableOpacity
                    onPress={ onPressCancel }
                >
                    <SettingIcon
                        name={ 'ios-card-outline' }
                        text={ "대관취소" }
                    />
                </TouchableOpacity>
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