import React, { createContext, useState } from 'react';

const HomeContext = createContext({ 
    state: {
        visible: false,
        map: '',
        mapType: '',
    },
    action: {
        setVisible: () => {},
        setMap: () => {},
        setMapType: () => {},
    }
});

const HomeProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [map, setMap] = useState('');
    const [mapType, setMapType] = useState('');
    const value = {
        state: {
            visible,
            map,
            mapType
        },
        actions: {
            setVisible,
            setMap,
            setMapType,
        }
    }

    return(
        <HomeContext.Provider value={ value }>
            { children }
        </HomeContext.Provider>
    )
}

const { Consumer: HomeConsumer } = HomeContext;

export { HomeProvider, HomeConsumer };

export default HomeContext;