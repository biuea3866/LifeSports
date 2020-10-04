import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardRegisterLocation from '../../Board/BoardRegisterLocate';
import BoardRegisterDate from '../../Board/BoardRegisterDate';
import BoardRegisterLocationAndDate from '../../Board/BoardRegisterLocationAndDate';

const Stack = createStackNavigator();

const BoardRegisterStackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="LocationAndDate"
                component={ BoardRegisterLocationAndDate }
                options={ "Select Location and Date"}
            />
            <Stack.Screen
                name="Location"
                component={ BoardRegisterLocation }
                options={{ title: 'Location' }}
            />
            <Stack.Screen
                name="Date"
                component={ BoardRegisterDate }
                options={{ title: 'Date' }}
            />
        </Stack.Navigator>
    );
};

export default BoardRegisterStackNavigation;