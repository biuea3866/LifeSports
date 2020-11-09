import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { readMap } from '../../../modules/map';
import NaverMapView from 'react-native-nmap';
import BoardFullMapMarker from './BoardFullMapMarker';
import { useRoute } from '@react-navigation/native';
/*  2020 - 09 - 28 (Mon)
*  Writer: 조봉준
*  
*  [ NaverMap API ]  
*  
*/
const BoardFullMap = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { map, error, loading } = useSelector(
        ({ map, loading }) => ({
            map: map.map,
            error: map.error,
        }),
    );
    useEffect( () => {
        dispatch(readMap(route.params.mapId));
    }, [dispatch]);
    
    // 추후에 현재위치 표시
    const defaultLocation = map ? { latitude: map.ycode , longitude: map.xcode } : console.log("Map Loading..");

    return(
        map &&
        <NaverMapView
            style={
                styles.container 
            }
            showsMyLocationButton={ true }
            center={
                {
                    ...defaultLocation,
                    zoom: 11
                }
            }
            scaleBar={ true }
        >       
            <BoardFullMapMarker data={ map }/>            
        </NaverMapView> 
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});

export default BoardFullMap;