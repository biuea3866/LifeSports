import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MapHeader from './MapComponents/MapHeader';
import MapFooter from './MapComponents/MapFooter'
import NaverMap from './MapComponents/NaverMap';
import { MapProvider, MapConsumer } from './context/MapContext';

const MapScreen = () => {

  return(
    <MapProvider>
      <View 
        style={ styles.container }
      >
        <MapHeader/>
        <NaverMap/>
        <MapConsumer>
          {
            ({ state }) => (
              state.visible &&
              <MapFooter />
            )
          }
        </MapConsumer>
      </View>
    </MapProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default MapScreen;