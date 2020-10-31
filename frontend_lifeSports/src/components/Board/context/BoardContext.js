import React, { createContext, useState } from 'react';

const BoardContext = createContext({ 
    state: {
        visible: '',
        boardType: '',
        map: '',
        time: '',
        date: '',
        people: '',
        title: '',
        content: '',
    },
    action: {
        setVisible: () => {},
        setBoardType: () => {},
        setMap: () => {},
        setTime: () => {},
        setDate: () => {},
        setPeople: () => {},
        setTitle: () => {},
        setContent: () => {}
    }
});

const BoardProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [boardType, setBoardType] = useState('together');
    const [map, setMap] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const value = {
        state: {
            visible,
            boardType,
            map,
            time,
            date,
            people,
            title,
            content
        },
        actions: {
            setVisible,
            setBoardType,
            setMap,
            setTime,
            setDate,
            setPeople,
            setTitle,
            setContent
        }
    }

    return(
        <BoardContext.Provider value={ value }>
            { children }
        </BoardContext.Provider>
    )
}

const { Consumer: BoardConsumer } = BoardContext;

export { BoardProvider, BoardConsumer };

export default BoardContext;