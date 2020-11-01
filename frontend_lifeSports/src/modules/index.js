import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import maps, { mapsSaga } from './maps';
import board, { boardSaga } from './boards';
import rental, { rentalSaga } from './rental';
import boardList, { boardListSaga } from './boardList';
import boardOne, { boardOneSaga } from './boardOne';
import comment, { commentSaga } from './comment';
import comments, { commentsSaga } from './comments';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    user,
    maps,
    loading,
    rental,
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
        mapsSaga(), 
        rentalSaga(), 
        boardSaga(), 
        boardListSaga(),
        boardOneSaga(),
        commentSaga(),
        commentsSaga()
    ]);
}

export default rootReducer;