import React, { useEffect } from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';
import RentalTimeButton from './RentalTimeButton';
import palette from '../../../styles/palette';

const timeArray = [
    '7~10', '10~13', '13~16', '16~19', '19~22'
];

const RentalTimePicker = () => {

    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.contentContainer }
            >
                {
                    timeArray.map(
                        ( time ) => {
                            return(
                                <RentalTimeButton
                                    time={ time }
                                />
                            )
                        }
                    )
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
    },
    contentContainer: {
        flexDirection: 'row',
        height: 100
    }
});

export default RentalTimePicker;