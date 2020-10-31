import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BoardRegister from '../../Board/BoardRegister';
import BoardRegisterLocationAndDate from '../../Board/BoardRegisterLocationAndDate';
import palette from '../../../styles/palette';
import { BoardConsumer, BoardProvider } from '../../Board/context/BoardContext';

const Tab = createMaterialTopTabNavigator();

const BoardRegisterNav = ({ user }) => {
    return(
        <BoardProvider>
            <BoardConsumer>
                {
                    ({ state }) => (
                        state.boardType === 'together' ?
                        <Tab.Navigator
                            tabBarOptions={{
                                labelStyle: { 
                                    fontSize: 15,
                                    fontWeight: 'bold' 
                                },
                                tabStyle: { width: 210 },
                                activeTintColor: palette.blue[4],
                                inactiveTintColor: palette.gray[5],
                            }}
                        >
                            <Tab.Screen
                                name="글 등록"
                                children={ 
                                    () => <BoardRegister user={ user }/> 
                                }
                                options={
                                    Tab
                                }
                            />
                            <Tab.Screen
                                name="위치 및 예약"
                                component={ BoardRegisterLocationAndDate }
                                options={
                                    Tab
                                }
                            />
                        </Tab.Navigator>
                        :
                        <Tab.Navigator
                            tabBarOptions={{
                                labelStyle: { 
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                },
                                tabStyle: { 
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            }}
                        >
                            <Tab.Screen
                                name="글 등록"
                                component={ BoardRegister }
                                options={
                                    Tab
                                }
                            />
                        </Tab.Navigator>
                    )
                }
            </BoardConsumer>
        </BoardProvider>
    )
}

export default BoardRegisterNav;