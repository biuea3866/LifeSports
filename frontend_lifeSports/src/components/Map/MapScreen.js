import * as React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NaverMap from './MapComponents/NaverMap';
import CustomMarker from './MapComponents/CustomMarker';

const MapScreen = () => {
  return(
    <View 
      style={ styles.container }
    >
      <NaverMap>
        <CustomMarker/>
      </NaverMap>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default MapScreen;