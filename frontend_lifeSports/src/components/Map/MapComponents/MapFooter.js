import React from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';
import palette from '../../../styles/palette';
import MapFooterHeader from './MapFooterHeader';
import MapFooterContent from './MapFooterContent';
import MapFooterFooter from './MapFooterFooter';

const MapFooter = ({ navigation }) => {
    
    return(
        <View
            style={ styles.container }
        >
            <MapFooterHeader/>
            <MapFooterContent/>
            <MapFooterFooter
                navigation={ navigation }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        backgroundColor: palette.white[0]
    }
});

export default MapFooter;