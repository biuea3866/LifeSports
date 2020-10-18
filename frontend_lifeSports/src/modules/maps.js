import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as mapsAPI from '../lib/api/maps';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_MAPS,
    LIST_MAPS_SUCCESS,
    LIST_MAPS_FAILURE,
] = createRequestActionTypes('maps/LIST_MAPS');

export const listMaps = createAction(LIST_MAPS);

const listMapsSaga = createRequestSaga(LIST_MAPS, mapsAPI.list);

export function* mapsSaga() {
    yield takeLatest(LIST_MAPS, listMapsSaga);
}

const initialState = {
    maps: null,
    error: null,
};

const maps = handleActions(
    {
        [LIST_MAPS_SUCCESS]: (state, { payload: maps }) => ({
            ...state,
            maps,
        }),
        [LIST_MAPS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default maps;