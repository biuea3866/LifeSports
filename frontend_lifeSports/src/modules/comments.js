import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';

const [
    COMMENT_LISTS,
    COMMENT_LISTS_SUCCESS,
    COMMENT_LISTS_FAILURE,
] = createRequestActionTypes('comment/COMMENT_LISTS');

export const listComments = createAction(COMMENT_LISTS, boardId => boardId);

const listCommentsSaga = createRequestSaga(COMMENT_LISTS, commentAPI.list);
export function* commentsSaga() {
    yield takeLatest(COMMENT_LISTS, listCommentsSaga);
}

const initialState = {
    comments: null,
    error: null,
};

const comments = handleActions(
    {
        [COMMENT_LISTS_SUCCESS]: (state, { payload: comments }) => ({
            ...state,
            comments,
        }),
        [COMMENT_LISTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default comments;