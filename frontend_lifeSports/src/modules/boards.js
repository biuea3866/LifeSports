import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardsAPI from '../lib/api/boards';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'boards/INITIALIZE'
const CHANGE_FIELD = 'boards/CHANGE_FIELD';
const [
    REGISTER_BOARD, 
    REGISTER_BOARD_SUCCESS, 
    REGISTER_BOARD_FAILURE,
] = createRequestActionTypes('boards/REGISTER_BOARD');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) =>({
    key,
    value
}));
export const registerBoard = createAction(
    REGISTER_BOARD, 
    ({ 
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
    }) => ({ 
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
    })
);

const registerBoardSaga = createRequestSaga(REGISTER_BOARD, boardsAPI.register);
export function* boardSaga() {
    yield takeLatest(REGISTER_BOARD, registerBoardSaga);
}

const initialState = {
    boardType: '',
    peopleRestrict: '',
    boardTitle: '',
    boardContent: '',
    writer: '',
    boardDate: '',
    comment: '',
    money: '',
    mapId: '',
    date: '',
    time: '',
    closingYn: false,
    board: null,
    boardError: null,
};

const board = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value,
        }),
        [REGISTER_BOARD]: state => ({
            ...state,
            board: null,
            boardError: null
        }),
        [REGISTER_BOARD_SUCCESS]: (state, { payload: board }) => ({
            ...state,
            board,
        }),
        [REGISTER_BOARD_FAILURE]: (state, { payload: boardError }) => ({
            ...state,
            boardError,
        }),
    },
    initialState,
);

export default board;