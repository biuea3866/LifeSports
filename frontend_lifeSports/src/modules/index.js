import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import map, { mapSaga } from './map';
import maps, { mapsSaga } from './maps';
import board, { boardSaga } from './boards';
import rental, { rentalSaga } from './rental';
import rentals, { rentalsSaga } from './rentals';
import boardList, { boardListSaga } from './boardList';
import boardOne, { boardOneSaga } from './boardOne';
import comment, { commentSaga } from './comment';
import comments, { commentsSaga } from './comments';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    user,
    map,
    maps,
    loading,
    rental,
    rentals,
    board,
    boardList,
    boardOne,
    comment,
    comments,
});

export function* rootSaga() {
    yield all([
        authSaga(), 
        userSaga(), 
        mapSaga(),
        mapsSaga(), 
        rentalSaga(), 
        boardSaga(), 
        boardListSaga(),
        boardOneSaga(),
        commentSaga(),
        commentsSaga(),
        rentalsSaga(),
    ]);
}

export default rootReducer;