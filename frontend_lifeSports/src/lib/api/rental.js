import client from './client';

export const write = ({
    paymentType, amount, userName,
    tel, email, userId,
    date, time, mapId, deleteYn
}) => client.post('http://localhost:4000/api/rental/write/', 
{ 
    paymentType, amount, userName,
    tel, email, userId,
    date, time, mapId, deleteYn 
});

export const list = userId => client.get(`http://localhost:4000//api/rental/list${userId}`);

export const read = id => client.get(`http://localhost:4000/api/rental/${id}`);