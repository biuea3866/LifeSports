import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const BoardDetailWriter = ({ board }) => {
    const navigation = useNavigation();
    const onPress = e => {
        navigation.navigate("fullMap", {
            mapId: board.mapId,
        })
    };

    return(
        <View
            style={ styles.writer }
        >
            <Text
                style={ styles.writerFont }
            >
                { board.writer }
            </Text>
            <View
                style={ styles.buttonArea }
            >
                <TouchableOpacity
                    onPress={ onPress }
                >
                    <Icon
                        name={ "ios-map" }
                        size={ 40 }
                        color={ palette.blue[4] }
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    writer: {
        flexDirection: 'row',
        height: '10%',
        paddingLeft: 20,
        paddingTop: 20,
    },
    writerFont: {
        fontWeight: '200',
        fontSize: 20
    },
    buttonArea: {
        marginLeft: '55%',
    }
});

export default BoardDetailWriter;