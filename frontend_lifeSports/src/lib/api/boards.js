import client from './client';

export const register = ({
    boardType,
    peopleRestrict,
    boardTitle,
    boardContent,
    userId,
    writer,
    boardDate,
    comment,
    money,
    mapId,
    date,
    time,
    closingYn,
}) => client.post('http://localhost:4000/api/boards/register/', { 
    boardType,
    peopleRestrict,
    boardTitle,
    boardContent,
    userId,
    writer,
    boardDate,
    comment,
    money,
    mapId,
    date,
    time,
    closingYn,
});

export const read = id => client.get(`http://localhost:4000/api/boards/${id}`);

export const readList = id => client.get(`http://localhost:4000/api/boards/list/${id}`);

export const list = () => client.get(`http://localhost:4000/api/boards/list`);