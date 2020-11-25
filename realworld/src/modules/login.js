import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api/api';

const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';

export const login = createAction(LOGIN_REQUEST, (email, password) => ({ email, password }));

function* getLoginSaga(action) {
    try {
        const result = yield call(api.login, action.payload);
        yield put({
            type: LOGIN_SUCCESS,
            payload: { ...result.data }
        })
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: { isLogin: false, error: true},
            error: true
        });
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, getLoginSaga);
}

const initialState = { isLogin: false, error: false };

const loginActions = handleActions(
    {
        [LOGIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
        [LOGIN_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
    },
    initialState,
)

export default loginActions;