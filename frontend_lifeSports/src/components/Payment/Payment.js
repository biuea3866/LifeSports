import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeRental } from '../../modules/rental';
import { 
    StyleSheet, 
    View,
    Text, 
    TouchableOpacity, 
} from 'react-native';
import StyledTextInput from '../Common/StyledInput';
import palette from '../../styles/palette';
import { useNavigation, useRoute } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { 
        paymentType, amount, userName, tel,
        email, userId, date, time, mapId, mapName, 
        deleteYn, rental, rentalError
    } = useSelector(
        ({ rental }) => ({
            paymentType: '카드',
            amount: route.params.amount,
            userName: route.params.user.userName,
            tel: '010-' +
                 route.params.user.phoneMiddleNumber +
                 '-' +
                 route.params.user.phoneLastNumber ,
            email: route.params.user.email,
            userId: route.params.user._id,
            date: route.params.date,
            time: route.params.time,
            mapId: route.params.map._id,
            mapName: route.params.map.nm,
            deleteYn: false,
            rental: rental.rental,
            rentalError: rental.rentalError
        })
    );

    const onPress = e => {
        dispatch(writeRental({
            paymentType, amount, userName, tel,
            email, userId, date, time, mapId, mapName, deleteYn
        }))        

        navigation.navigate("Map", {
            name: "Map"
        })
    };


    return(
        <View
            style={ styles.container }
        >
            <View
                style={ styles.content }
            >
                <View
                    style={ styles.row }
                >
                    <Text
                        style={ styles.Label }
                    >
                        결제 수단
                    </Text>
                    <StyledTextInput
                        placeholderTextColor={ palette.gray[3] }
                        value="카드"
                    />
                </View>
                <View
                    style={ styles.row }
                >
                    <Text
                        style={ styles.Label }
                    >
                        결제 내역
                    </Text>
                    <StyledTextInput
                        placeholderTextColor={ palette.gray[3] }
                        value={ route.params.map.nm }
                    />
                </View>
                <View
                    style={ styles.row }
                >
                    <Text
                        style={ styles.Label }
                    >
                        결제 금액
                    </Text>
                    <StyledTextInput
                        placeholderTextColor={ palette.gray[3] }
                        value={ route.params.amount.toString() }
                    />
                </View>
                <View
                    style={ styles.row }
                >
                    <Text
                        style={ styles.Label }
                    >
                        사용자명
                    </Text>
                    <StyledTextInput
                        placeholderTextColor={ palette.gray[3] }
                        value={ route.params.user.userName }
                    />
                </View>
                <View
                    style={ styles.row }
                >
                    <Text
                        style={ styles.Label }
                    >
                        전화번호
                    </Text>
                    <StyledTextInput
                        placeholderTextColor={ palette.gray[3] }
                        value={ 
                            '010-' + 
                            route.params.user.phoneMiddleNumber + 
                            '-' +  
                            route.params.user.phoneLastNumber
                        }
                    />
                </View>
                <View
                    style={ styles.row }
                >
                    <Text
                        style={ styles.Label }
                    >
                        유저 메일
                    </Text>
                    <StyledTextInput
                        placeholderTextColor={ palette.gray[3] }
                        value={ 
                            route.params.user.email
                        }
                    />
                </View>
                <View
                    style={ styles.ButtonArea }
                >
                    <TouchableOpacity
                        style={ styles.Button }
                        onPress={ onPress }
                    >
                        <Text
                            style={ styles.ButtonFont }
                        >
                            결제하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flexDirection: 'column',
        width: '90%',
        height: '90%',
        backgroundColor: palette.white[0]
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Label: {
        fontWeight: 'bold',
        padding: 20
    },
    ButtonArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 70,
        backgroundColor: palette.blue[2]
    },
    ButtonFont: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: palette.white[0]
    }
});

export default Payment;