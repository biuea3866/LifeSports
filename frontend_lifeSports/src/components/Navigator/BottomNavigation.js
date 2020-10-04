import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { readUser } from '../../modules/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../styles/palette';
import HomeScreen from '../Home/HomeScreen';
import MapScreen from '../Map/MapScreen';
import BoardStackNav from './BoardNavigator/BoardStackNavigation';
import SettingScreen from '../Setting/Setting';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ route }) => {
    const user = route.params.user;
    const dispatch = useDispatch();
    const { userInfo } = useSelector(({ auth }) => ({
        userInfo: auth.userInfo
    }));

    useEffect( () => {
        dispatch(readUser(user));
    }, [dispatch, user]);

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let iconSize;
                    
                    if(route.name === "Home"){
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Board') {
                        iconName = focused ? 'ios-reader' : 'ios-reader-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Map'){
                        iconName = focused ? 'ios-location' : 'ios-location-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Setting'){
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                        iconSize = focused ? 32 : 24;
                    }

                    return (
                        <Icon 
                            size={ iconSize }
                            name={ iconName } 
                            color={ color }
                        />
                    );
                },
            })}

            tabBarOptions={{
                activeTintColor: palette.blue[4],
                inactiveTintColor: palette.gray[5],
            }}
        >
            <Tab.Screen 
                name="Home"
                component={ HomeScreen }
            />
            <Tab.Screen 
                name="Board"
                children={
                    () => <BoardStackNav user={ userInfo }/>
                }
            />
            <Tab.Screen 
                name="Map"
                component={ MapScreen }
            />
            <Tab.Screen 
                name="Setting"
                children={ 
                    () => <SettingScreen user={ userInfo } />
                }
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;