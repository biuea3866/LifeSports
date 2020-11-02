import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../../Setting/SettingScreen';
import SettingCancel from '../../Setting/SettingComponets/SettingCancel';

const Stack = createStackNavigator();

const SettingStackNav = ({ user }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Setting"
                children={ 
                    () => <SettingScreen user={ user } />
                }
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Cancel"
                children={
                    () => <SettingCancel user={ user } />
                }
            />
        </Stack.Navigator>
    );
};

export default SettingStackNav;