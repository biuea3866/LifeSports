import React, { createContext, useState } from 'react';

const RentalContext = createContext({ 
    state: {
        date: '',
        time: []
    },
    action: {
        setDate: () => {},
        setTime: () => {}
    }
});

const RentalProvider = ({ children }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState([]);
    const value = {
        state: {
            date,
            time
        },
        actions: {
            setDate,
            setTime
        }
    }

    return(
        <RentalContext.Provider value={ value }>
            { children }
        </RentalContext.Provider>
    )
}

const { Consumer: RentalConsumer } = RentalContext;

export { RentalProvider, RentalConsumer };

export default RentalContext;