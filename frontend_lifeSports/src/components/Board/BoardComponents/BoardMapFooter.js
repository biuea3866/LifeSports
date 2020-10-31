import React from 'react';
import { 
    StyleSheet, 
    View
} from 'react-native';
import palette from '../../../styles/palette';
import BoardMapFooterHeader from './BoardMapFooterHeader';
import BoardMapFooterContent from './BoardMapFooterContent';
import BoardMapFooterFooter from './BoardMapFooterFooter';

const BoardMapFooter = () => {
    return(
        <View
            style={ styles.container }
        >
            <BoardMapFooterHeader/>
            <BoardMapFooterContent/>
            <BoardMapFooterFooter />
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

export default BoardMapFooter;