import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';
import BoardMapDetailTimeButton from './BoardMapDetailTimeButton';

const timeArray = [
    '7~10', '10~13', '13~16', '16~19', '19~22'
];

const BoardMapDetailTimePicker = () => {

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
                                <BoardMapDetailTimeButton
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

export default BoardMapDetailTimePicker;