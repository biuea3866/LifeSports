import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../../styles/palette';

const CategoryIcon = ({ name, text }) => {
    return(
        <View
            style={ styles.container }
        >
            <Icon
                size={ 48 }
                name={ name }
                color={ palette.blue[4] }
            />
            <Text>
                { text }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        margin: 20
    }
});

export default CategoryIcon;