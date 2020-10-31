import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardRegisterLocationAndDate from '../../Board/BoardRegisterLocationAndDate';
import BoardRegister from '../../Board/BoardRegister';

const Stack = createStackNavigator();

const BoardRegisterStackNavigation = () => {
    
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BoardRegister"
                children={ 
                    () => <BoardRegister /> 
                }
            />
            <Stack.Screen
                name="LocationAndDate"
                children={ 
                    () => <BoardRegisterLocationAndDate />
                }
            />
        </Stack.Navigator>
    );
};

export default BoardRegisterStackNavigation;