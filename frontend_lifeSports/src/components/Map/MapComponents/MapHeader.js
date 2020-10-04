import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const MapHeader = () => {
    const onPress = e => {
        e.defaultPrevent();
    }
    return(
        <KeyboardAvoidingView
            style={ styles.headerContainer }
            behavior="padding"
            enabled
        >
            <View
                style={ styles.container }
            >
                <TextInput
                    style={ styles.textInput }
                />
                <TouchableOpacity
                    onPress={ onPress }
                >
                    <Icon
                        name={ 'ios-search-outline' }
                        size={ 19 }
                        color={ palette.white[0] }
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        backgroundColor: palette.blue[7],
        borderRadius: 30,
    },
    textInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 300,
        height: 50,
        backgroundColor: palette.blue[7],
        borderRadius: 30,
        color: palette.white[0],
        fontWeight: '400',
        fontSize: 16
    },
    headerContainer: {
        width: 420,
        height: 70,
        backgroundColor: palette.blue[5],
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MapHeader;