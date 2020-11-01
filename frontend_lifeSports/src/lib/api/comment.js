import client from './client';

export const list = boardId => client.get(`http://localhost:4000/api/comment/list/${boardId}`)

export const write = ({
    userId,
    boardId, 
    contents, 
    author, 
    commentDate
}) => client.post('http://localhost:4000/api/comment/write/', {
    userId,
    boardId, 
    contents, 
    author, 
    commentDate
});

export const removeComment = id => client.delete(`http://localhost:4000/api/comment/${id}`);