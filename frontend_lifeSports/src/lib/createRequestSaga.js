import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

 /**
 *  2020 - 09 - 21 (Mon)
 *  Writer: 조봉준
 *  
 *  [ createRequestSaga ]  
 *
 *  1. createRequestActionTypes
 *  To reduce the number of codes, 
 *  separate action types are received and unstructured assignments
 * 
 *  2. createRequestSaga
 *  Using loading methods, use easily RequestSaga  
 */
export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type)); // start Loading

        try { 
            const response = yield call(request, action.payload);
            
            yield put({
                type: SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        
        yield put(finishLoading(type)); // finish Loading
    }
}