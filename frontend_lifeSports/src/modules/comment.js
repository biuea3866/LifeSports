import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'comment/INITIALIZE'
const CHANGE_FIELD = 'comment/CHANGE_FIELD';
const [
    WRITE_COMMENT, 
    WRITE_COMMENT_SUCCESS, 
    WRITE_COMMENT_FAILURE,
] = createRequestActionTypes('comment/WRITE_COMMENT');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) =>({
    key,
    value
}));
export const writeComment = createAction(
    WRITE_COMMENT, 
    ({ 
        userId,
        boardId,
        contents,
        author,
        commentDate,
    }) => ({ 
        userId,
        boardId,
        contents,
        author,
        commentDate,
    })
);

const writeCommentSaga = createRequestSaga(WRITE_COMMENT, commentAPI.write);
export function* commentSaga() {
    yield takeLatest(WRITE_COMMENT, writeCommentSaga);
}

const initialState = {
    boardId: '',
    contents: '',
    author: '',
    commentDate: '',
    comment: null,
    commentError: null,
};

const comment = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_COMMENT]: state => ({
            ...state,
            comment: null,
            commentError: null,
        }),
        [WRITE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
            ...state,
            comment,
        }),
        [WRITE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
            ...state,
            commentError,
        }),
    },
    initialState,
);

export default comment;