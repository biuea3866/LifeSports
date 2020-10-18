import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as rentalAPI from '../lib/api/rental';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'rental/INITIALIZE'
const [
    WRITE_RENTAL,
    WRITE_RENTAL_SUCCESS,
    WRITE_RENTAL_FAILURE,
] = createRequestActionTypes('rental/WRITE_RENTAL');

export const writeRental = createAction(
    WRITE_RENTAL, 
    ({ paymentType,
        amount,
        userName,
        tel,
        email,
        userId,
        date,
        time,
        mapId }) => ({ 
        paymentType,
        amount,
        userName,
        tel,
        email,
        userId,
        date,
        time,
        mapId,
    })
);

const writeRentalSaga = createRequestSaga(WRITE_RENTAL, rentalAPI.write);

export function* rentalSaga() {
    yield takeLatest(WRITE_RENTAL, writeRentalSaga);
}

const initialState = {
    paymentType: '카드',
    amount: null,
    userName: '',
    tel: '',
    email: '',
    userId: '',
    date: '',
    time: '',
    mapId: '',
    rental: null,
    rentalError: null,
};

const rental = handleActions(
    {
        [WRITE_RENTAL]: state => ({
            ...state,
            rental: null,
            rentalError: null
        }),
        [WRITE_RENTAL_SUCCESS]: (state, { payload: rental }) => ({
            ...state,
            rental,
        }),
        [WRITE_RENTAL_FAILURE]: (state, { payload: rentalError }) => ({
            ...state,
            rentalError,
        }),
    },
    initialState,
);

export default rental;