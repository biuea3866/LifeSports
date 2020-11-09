import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardsAPI from '../lib/api/boards';
import { takeLatest } from 'redux-saga/effects';

const [
    BOARDLIST_BY_ID,
    BOARDLIST_BY_ID_SUCCESS,
    BOARDLIST_BY_ID_FAILURE,
] = createRequestActionTypes('boards/BOARDLIST_BY_ID');

export const boardListById = createAction(BOARDLIST_BY_ID, userId => userId);

const boardListByIdSaga = createRequestSaga(BOARDLIST_BY_ID, boardsAPI.readList);

export function* boardListsByIdSaga() {
    yield takeLatest(BOARDLIST_BY_ID, boardListByIdSaga);
}

const initialState = {
    boards: null,
    error: null,
};

const boards = handleActions(
    {
        [BOARDLIST_BY_ID_SUCCESS]: (state, { payload: boards }) => ({
            ...state,
            boards,
        }),
        [BOARDLIST_BY_ID_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default boards;