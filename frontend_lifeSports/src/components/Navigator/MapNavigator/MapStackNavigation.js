import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../../Map/MapScreen';
import RentalScreen from '../../Rental/RentalScreen';
import Payment from '../../Payment/Payment';

const Stack = createStackNavigator();

const MapStackNav = ({ user }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Map"
                component={ MapScreen }
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Rental"
                children={ 
                    () => <RentalScreen user={ user }/>
                }
            />
            <Stack.Screen
                name="Payment"
                children={
                    () => <Payment user={ user } />
                }
            />
        </Stack.Navigator>
    );
};

export default MapStackNav;