import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardsAPI from '../lib/api/boards';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_BOARD,
    READ_BOARD_SUCCESS,
    READ_BOARD_FAILURE,
] = createRequestActionTypes('boards/READ_BOARD');

export const readBoardOne = createAction(READ_BOARD, id => id);

const readBoardOneSaga = createRequestSaga(READ_BOARD, boardsAPI.read);
export function* boardOneSaga() {
    yield takeLatest(READ_BOARD, readBoardOneSaga);
}

const initialState = {
    board: null,
    error: null,
};

const boardOne = handleActions(
    {
        [READ_BOARD_SUCCESS]: (state, { payload: board }) => ({
            ...state,
            board,
        }),
        [READ_BOARD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default boardOne;