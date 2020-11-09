import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as mapsAPI from '../lib/api/maps';
import { takeLatest } from 'redux-saga/effects';

const [
    CATEGORY_MAPS,
    CATEGORY_MAPS_SUCCESS,
    CATEGORY_MAPS_FAILURE,
] = createRequestActionTypes('maps/CATEGORY_MAPS');

export const categoryMaps = createAction(CATEGORY_MAPS, type_nm => type_nm);

const categoryMapsSaga = createRequestSaga(CATEGORY_MAPS, mapsAPI.categoryList);

export function* mapCategorySaga() {
    yield takeLatest(CATEGORY_MAPS, categoryMapsSaga);
}

const initialState = {
    mapCategory: null,
    error: null,
};

const mapCategory = handleActions(
    {
        [CATEGORY_MAPS_SUCCESS]: (state, { payload: mapCategory }) => ({
            ...state,
            mapCategory,
        }),
        [CATEGORY_MAPS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default mapCategory;