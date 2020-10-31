import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardsAPI from '../lib/api/boards';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_BOARDLIST,
    READ_BOARDLIST_SUCCESS,
    READ_BOARDLIST_FAILURE,
] = createRequestActionTypes('boards/READ_BOARDLIST');

export const readBoardList = createAction(READ_BOARDLIST);

const readBoardListSaga = createRequestSaga(READ_BOARDLIST, boardsAPI.list);
export function* boardListSaga() {
    yield takeLatest(READ_BOARDLIST, readBoardListSaga);
}

const initialState = {
    boardList: null,
    error: null,
};

const boardList = handleActions(
    {
        [READ_BOARDLIST_SUCCESS]: (state, { payload: boardList }) => ({
            ...state,
            boardList,
        }),
        [READ_BOARDLIST_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default boardList;