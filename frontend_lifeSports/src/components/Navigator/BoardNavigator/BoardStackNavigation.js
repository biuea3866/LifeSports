import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardRegisterNav from './BoardRegisterNavigation'
import BoardScreen from '../../Board/BoardScreen';

const Stack = createStackNavigator();

const BoardStackNav = ({ user }) => {
    console.log(user);

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Board"
                component={ BoardScreen }
                options={{ 
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                children={
                    () => <BoardRegisterNav user={ user }/>
                }
            />
        </Stack.Navigator>
    );
};

export default BoardStackNav;