import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryMaps } from '../../../modules/mapCategory';
import { StyleSheet } from 'react-native'
import NaverMapView from 'react-native-nmap';
import CustomMarker from './CustomMarker';
import HomeMapFooter from './HomeMapFooter';
import { HomeConsumer, HomeProvider } from '../context/HomeContext';
import { useRoute } from '@react-navigation/native';

/*  2020 - 09 - 28 (Mon)
*  Writer: 조봉준
*  
*  [ NaverMap API ]  
*  
*/
const HomeNaverMap = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const { mapCategory, error, loading } = useSelector(({ mapCategory, loading }) => ({
        mapCategory: mapCategory.mapCategory,
        error: mapCategory.error,
        loading: loading['maps/CATEGORY_MAPS']
    }));
    // 추후에 현재위치 표시
    const defaultLocation = {latitude: 37.6009735 , longitude: 126.9484764};

    useEffect( () => {
        dispatch(categoryMaps(route.params.type_nm))
    }, [dispatch, route.params.type_nm]);

    return(
        <HomeProvider>
            <HomeConsumer>
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
                                    zoom: 11
                                }
                            }
                            scaleBar={ true }
                        >
                            { 
                                mapCategory ?
                                mapCategory.map(
                                    (map, i) => {
                                        return <CustomMarker key={ i } data={ map }/>
                                    }
                                ) :
                                console.log("Map Data Loading..")
                            }
                        </NaverMapView> 
                    )
                }
            </HomeConsumer>
            <HomeConsumer>
                {
                    ({ state }) => (
                        state.visible &&
                        <HomeMapFooter/>
                    )
                }
            </HomeConsumer>
        </HomeProvider>
    )
}

const styles = StyleSheet.create({
    OpenBoxMapContainer: {
        width: '100%',
        height: '70%',
    },
    CloseBoxMapContainer: {
        width: '100%',
        height: '100%',
    }
});

export default HomeNaverMap;