import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import palette from '../../styles/palette';
import HomeScreen from '../Home/HomeScreen';
import MapScreen from '../Map/MapScreen';
import ChatScreen from '../Chat/ChatScreen';
import SettingScreen from '../Setting/Setting';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ route }) => {
    const user = route.params;
    
    console.log(user.user.email);
    
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let iconSize;

                    if(route.name === 'Home'){
                        iconName = 'home-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Chat') {
                        iconName = 'chatbubble-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Map'){
                        iconName = 'location-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Setting'){
                        iconName = 'person-outline';
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
                name="Chat"
                component={ ChatScreen }
            />
            <Tab.Screen 
                name="Map"
                component={ MapScreen }
            />
            <Tab.Screen 
                name="Setting"
                component={ SettingScreen }
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;