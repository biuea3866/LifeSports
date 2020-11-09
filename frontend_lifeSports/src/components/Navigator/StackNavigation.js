import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login/LoginScreen';
import JoinScreen from '../Join/JoinScreen';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const StackNav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={ LoginScreen }
                    options={{ 
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Join"
                    component={ JoinScreen }
                    options={{ 
                        title: 'Join'
                    }}
                />
                <Stack.Screen
                    name="Tab"
                    component={ BottomNavigation }
                    options={{ 
                        title: 'Tab',
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNav;