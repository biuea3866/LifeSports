import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as rentalAPI from '../lib/api/rental';
import { takeLatest } from 'redux-saga/effects';

const [
    RENTAL_LISTS,
    RENTAL_LISTS_SUCCESS,
    RENTAL_LISTS_FAILURE,
] = createRequestActionTypes('rental/RENTAL_LISTS');

export const listRentals = createAction(RENTAL_LISTS, userId => userId);

const listRentalsSaga = createRequestSaga(RENTAL_LISTS, rentalAPI.list);
export function* rentalsSaga() {
    yield takeLatest(RENTAL_LISTS, listRentalsSaga);
}

const initialState = {
    rentals: null,
    error: null,
};

const rentals = handleActions(
    {
        [RENTAL_LISTS_SUCCESS]: (state, { payload: rentals }) => ({
            ...state,
            rentals,
        }),
        [RENTAL_LISTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default rentals;