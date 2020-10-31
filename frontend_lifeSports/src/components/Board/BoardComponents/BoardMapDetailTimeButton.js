import React from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import palette from '../../../styles/palette';
import { BoardConsumer } from '../context/BoardContext';

const BoardMapDetailTimeButton = ({ time }) => {
    
    return(
        <BoardConsumer>
            {
                ({ actions }) => (
                    <TouchableOpacity
                        style={ styles.ButtonShape }
                        onPress={ 
                            () => actions.setTime(time)
                        }
                    >
                        <Text
                            style={ styles.ButtonFont }
                        >
                            { time }
                        </Text>
                    </TouchableOpacity>
                )
            }
        </BoardConsumer>
    )
};

const styles = StyleSheet.create({
    ButtonShape: {
        width: '20%',
        height: 40,
        backgroundColor: palette.blue[4],
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: palette.white[4],
        borderRightColor: palette.gray[4],
        borderWidth: 1
    },
    ButtonFont: {
        fontWeight: 'bold',
        fontSize: 15,
        color: palette.white[0]
    }

});

export default BoardMapDetailTimeButton;