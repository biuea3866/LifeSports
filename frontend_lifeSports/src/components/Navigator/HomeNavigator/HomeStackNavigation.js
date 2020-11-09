import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RentalScreen from '../../Rental/RentalScreen';
import Payment from '../../Payment/Payment';
import HomeNaverMap from '../../Home/HomeComponents/HomeNaverMap';
import HomeScreen from '../../Home/HomeScreen';

const Stack = createStackNavigator();

const HomeStackNav = ({ user }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                children={
                    () => <HomeScreen user={ user } />
                }
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="대관하기"
                children={ 
                    () => <RentalScreen user={ user } />
                }
            />
            <Stack.Screen
                name="Payment"
                children={
                    () => <Payment user={ user } />
                }
            />
            <Stack.Screen 
                name="categoryMap"
                children={
                    () => <HomeNaverMap user={ user }/>
                }
            />
        </Stack.Navigator>
    );
};

export default HomeStackNav;