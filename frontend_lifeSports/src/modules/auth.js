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

const [READ_USER, READ_USER_SUCCESS, READ_USER_FAILURE] = createRequestActionTypes(
    'auth/READ_USER',
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
    REGISTER, ({ 
        email, password,
        userName, nickName,  
        socialNumberPrefix, socialNumberSuffix, 
        addr, phoneNumber, point }) => ({
        email, password,
        userName, nickName, 
        socialNumberPrefix, socialNumberSuffix, 
        addr, phoneNumber, point
    })
);

export const login = createAction(
    LOGIN, ({ email, password }) => ({
        email,
        password,
    })
);

export const readUser = createAction(READ_USER, id => id);

// Saga
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const readUserSaga = createRequestSaga(READ_USER, authAPI.readUser);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(READ_USER, readUserSaga);
}

const initialState = {
    register: {
        email: '', 
        password: '',
        passwordConfirm: '',
        userName: '', 
        nickName: '',
        socialNumberPrefix: '', 
        socialNumberSuffix: '', 
        addr: '', 
        phoneNumber: '',
        point: 1000000,
    },
    login: {
        email: '',
        password: '',
    },
    auth: null,
    authError: null,
    userInfo: null,
    error: null,
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
        [READ_USER_SUCCESS]: (state, { payload: userInfo }) => ({
            ...state,
            userInfo,
        }),
        [READ_USER_FAILURE]: (state, { payload: userInfo }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default auth;