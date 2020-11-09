import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardRegisterNav from './BoardRegisterNavigation'
import BoardScreen from '../../Board/BoardScreen';
import BoardMapDetail from '../../Board/BoardComponents/BoardMapDetail';
import BoardDetail from '../../Board/BoardComponents/BoardDetail';
import BoardFullMap from '../../Board/BoardComponents/BoardFullMap';
import BoardTypeList from '../../Board/BoardComponents/BoardTypeList';

const Stack = createStackNavigator();

const BoardStackNav = ({ user }) => {

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Board"
                children={ 
                    () => <BoardScreen user={ user } />
                }
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
            <Stack.Screen
                name="BoardMapDetail"
                children={
                    () => <BoardMapDetail user={ user } />
                }
            />
            <Stack.Screen
                name="BoardDetail"
                component={ BoardDetail }
            />
            <Stack.Screen 
                name="fullMap"
                component={ BoardFullMap }
            />
            <Stack.Screen
                name="BoardTypeList"
                component={ BoardTypeList }
            />
        </Stack.Navigator>
    );
};

export default BoardStackNav;