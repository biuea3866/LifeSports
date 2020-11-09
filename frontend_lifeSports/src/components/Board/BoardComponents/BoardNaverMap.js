import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listMaps } from '../../../modules/maps';
import NaverMapView from 'react-native-nmap';
import CustomMarker from './CustomMarker';
import { BoardConsumer } from '../context/BoardContext';

const BoardNaverMap = () => {
    const dispatch = useDispatch();
    const { maps, error, loading } = useSelector(
        ({ maps, loading }) => ({
            maps: maps.maps,
            error: maps.error,
        }),
    );
    useEffect( () => {
        dispatch(listMaps());
    }, [dispatch]);
    // 추후에 현재위치 표시
    const defaultLocation = {latitude: 37.6009735 , longitude: 126.9484764};
   
    return(
        <BoardConsumer>
            {
                ({ state }) => (
                    <NaverMapView
                        style={ 
                            state.visible ? 
                            styles.OpenBoxMapContainer :
                            styles.CloseBoxMapContainer 
                        }
                        showsMyLocationButton={ true }
                        center={
                            {
                                ...defaultLocation,
                                zoom: 16
                            }
                        }
                        scaleBar={ true }
                    >
                        { 
                            maps ?
                            maps.map(
                                (map, i) => {
                                    return <CustomMarker key={ i } data={ map }/>
                                }
                            ) :
                            console.log("Map Data Loading..")
                        }
                    </NaverMapView> 
                )
            }
        </BoardConsumer>
    )
};

const styles = StyleSheet.create({
    OpenBoxMapContainer: {
        width: '100%',
        height: '60%',
    },
    CloseBoxMapContainer: {
        width: '100%',
        height: '90%',
    }
});

export default BoardNaverMap;