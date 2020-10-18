import React, { createContext, useState } from 'react';

const MapContext = createContext({ 
    state: {
        visible: false,
        map: ''
    },
    action: {
        setVisible: () => {},
        setMap: () => {}
    }
});

const MapProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [map, setMap] = useState('');
    const value = {
        state: {
            visible,
            map
        },
        actions: {
            setVisible,
            setMap
        }
    }

    return(
        <MapContext.Provider value={ value }>
            { children }
        </MapContext.Provider>
    )
}

const { Consumer: MapConsumer } = MapContext;

export { MapProvider, MapConsumer };

export default MapContext;