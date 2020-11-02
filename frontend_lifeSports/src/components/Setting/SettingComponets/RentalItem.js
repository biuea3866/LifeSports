import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readMap } from '../../../modules/map';
import { StyleSheet, View, Text } from 'react-native';
import palette from '../../../styles/palette';

const RentalItem = ({ item }) => {
    const dispatch = useDispatch();
    const { map, error, loading } = useSelector(({ map, loading }) => ({
        map: map.map,
        error: map.error,
        loading: loading['map/READ_MAP']
    }));
    const onPress = e => {};

    useEffect( () => {
        dispatch(readMap(item.mapId))
    }, [dispatch, item]);

    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.dateFont }
            >
                { item.date + "  " + item.time }
            </Text>
            <Text
                style={ styles.locationFont }
            >
                { item.mapName }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 30,
        backgroundColor: palette.gray[3]
    },
    dateFont: {
        fontWeight: 'bold',
        fontSize: 15
    },
    locationFont: {
        fontWeight: 'bold',
        fontSize: 15
    },
});

export default RentalItem;