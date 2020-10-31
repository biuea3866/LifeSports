import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import palette from '../../../styles/palette';
import BoardMapDetailTimePicker from './BoardMapDetailTimePicker';
import { BoardConsumer } from '../context/BoardContext';

const BoardMapDetailSetDate = () => {

    return(
        <View
            style={ styles.RentalTitleArea }
        >
            <Text
                style={ styles.RentalTitle }
            >
                대관 날짜 선택
            </Text>
            <BoardConsumer>
                {
                    ({ actions }) => (
                        <CalendarStrip
                            style={ styles.DateArea }
                            calendarHeaderStyle={{ color: palette.black[0] }}
                            dateNumberStyle={{ color: palette.black[0] }}
                            dateNameStyle={{ color: palette.black[0] }}
                            onDateSelected={ 
                                e => {
                                    actions.setDate(e.toString().substr(0, 15))
                                }
                            }
                            disabledDateNameStyle={{color: palette.gray[4] }}
                            disabledDateNumberStyle={{color: palette.gray[4] }}
                            highlightDateNumberStyle={{color: palette.blue[0] }}
                            highlightDateNameStyle={{color: palette.blue[0] }}
                            startingDate={ new Date() }
                            minDate={ new Date() }
                        />
                    )
                }
            </BoardConsumer>
            <BoardMapDetailTimePicker/>
            <BoardConsumer>
                {
                    ({ state }) => (
                        <View
                            style={ styles.SelectArea }
                        >
                            <Text
                                style={ styles.SelectFont }
                            >
                                선택 날짜 : 
                            </Text>
                            <Text
                                style={ styles.SelectFont }
                            >
                                {
                                    state.date + "\t" + state.time
                                }
                            </Text>
                        </View>
                    )
                }
            </BoardConsumer>
        </View>
        
    )
};

const styles = StyleSheet.create({
    RentalTitleArea: {
        width: '100%',
        height: 100,
        padding: 20
    }, 
    RentalTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    DateArea: {
        height: 120, 
        paddingTop: 20, 
        paddingBottom: 10
    },
    SelectArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60
    },
    SelectFont: {
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default BoardMapDetailSetDate;