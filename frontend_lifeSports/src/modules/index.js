import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import maps, { mapsSaga } from './maps';
import rental, { rentalSaga } from './rental';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    user,
    maps,
    loading,
    rental
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), mapsSaga(), rentalSaga()]);
}

export default rootReducer;