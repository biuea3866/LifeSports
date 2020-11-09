import React from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';
import palette from '../../../styles/palette';
import HomeMapFooterHeader from './HomeMapFooterHeader';
import HomeMapFooterContent from './HomeMapFooterContent';
import HomeMapFooterFooter from './HomeMapFooterFooter';

const HomeMapFooter = () => {
    
    return(
        <View
            style={ styles.container }
        >
            <HomeMapFooterHeader/>
            <HomeMapFooterContent/>
            <HomeMapFooterFooter/>
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

export default HomeMapFooter;