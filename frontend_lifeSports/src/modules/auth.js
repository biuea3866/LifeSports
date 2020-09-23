import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, { 
    createRequestActionTypes 
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
/*
 *  2020 - 09 - 21 (Tues)
 *  Writer: 조봉준
 *  
 *  [ auth.js ]  
 *  
 *  Using Saga
 *  It manages filed values that can save e.g.) login : email, password..
 *  and commnuicates with authAPI http using saga
 */

const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN',
);

export const changeField = createAction(
    CHANGE_FILED,
    ({ form, key, value }) => ({
        form,                       // register, login
        key,                        // email, password, ...
        value                       // Real value
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register, login

export const register = createAction(
    REGISTER, ({ email, password }) => ({
        email,
        password,
    })
);

export const login = createAction(
    LOGIN, ({ email, password }) => ({
        email,
        password,
    })
);

// Saga
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    register: {
        email: '', 
        password: '', 
        userName: '', 
        nickName: '', 
        birthYear: '', 
        birthMonth: '', 
        birthDay: '', 
        gender: '', 
        addr: '',
        phoneMiddleNumber: '', 
        phoneLastNumber: '', 
    },
    login: {
        email: '',
        password: '',
    },
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        [CHANGE_FILED]: (state, { payload: { form, key, value }}) =>
            produce(state, draft => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null, // Initialize member authentication error when converting form
        }),
        // Success register
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        // Fail register
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // Success Login
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        // Fail Login
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);

export default auth;