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
    const user = route.params.user;
    
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let iconSize;
                    
                    if(route.name === "Home"){
                        iconName = 'ios-home-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Chat') {
                        iconName = 'ios-chatbubbles-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Map'){
                        iconName = 'ios-location-outline';
                        iconSize = focused ? 32 : 24;
                    } else if (route.name === 'Setting'){
                        iconName = 'ios-person-outline';
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
                initialParams={{ user: user }}
            />
            <Tab.Screen 
                name="Chat"
                component={ ChatScreen }
                initialParams={{ user: user }}
            />
            <Tab.Screen 
                name="Map"
                component={ MapScreen }
                initialParams={{ user: user }}
            />
            <Tab.Screen 
                name="Setting"
                component={ SettingScreen }
                initialParams={{ user: user }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;