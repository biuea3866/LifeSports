import * as React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NaverMap from '../Common/NaverMap';

const MapScreen = () => {
  return(
    <View 
      style={ styles.container }
    >
      <NaverMap/>
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