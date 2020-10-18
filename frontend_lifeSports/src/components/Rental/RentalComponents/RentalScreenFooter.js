import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    TouchableOpacity 
} from 'react-native';
import palette from '../../../styles/palette';
import { useNavigation } from '@react-navigation/native';

const RentalScreenFooter = ({ user, date, time, map }) => {
    const navigation = useNavigation();

    return(
        <View
            style={ styles.container }
        >
            <TouchableOpacity
                style={ styles.ButtonShape }
                onPress={
                    () => navigation.navigate("Payment", {
                        name: "Payment",
                        user: user,
                        date: date,
                        time: time,
                        map: map,
                        amount: 100000
                    })
                }
            >
                <Text
                    style={ styles.ButtonFont }
                >
                    예약하기
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        backgroundColor: palette.white[0]
    },
    ButtonShape: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 50,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: palette.blue[4]
    },
    ButtonFont: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default RentalScreenFooter;