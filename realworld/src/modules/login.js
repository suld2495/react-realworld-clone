import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery, getContext } from 'redux-saga/effects'
import * as api from '../api/api';

const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';

const LOGOUT_REQUEST = 'login/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'login/LOGOUT_SUCCESS';

const GO_TO_HOME = 'login/GO_TO_HOME';

export const login = createAction(LOGIN_REQUEST, (email, password) => ({ email, password }));
export const logout = createAction(LOGOUT_SUCCESS, (email, password) => ({ email, password }));

function* getLoginSaga(action) {
    try {
        const result = yield call(api.login, action.payload);
        yield put({
            type: LOGIN_SUCCESS,
            payload: { isLogin: result, error: !result }
        });
        yield put({
            type: GO_TO_HOME,
        });
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: { isLogin: false, error: true },
            error: true
        });
    }
}

function* logoutSaga() {
    yield put({
        type: LOGOUT_SUCCESS,
        payload: { isLogin: false, error: false }
    });
    yield put({
        type: GO_TO_HOME,
    });
}

function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/');
}

export function* loginSaga() {
    yield takeEvery(LOGOUT_REQUEST, logoutSaga);
    yield takeEvery(LOGIN_REQUEST, getLoginSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
}

const initialState = { isLogin: false, error: false };

const loginActions = handleActions(
    {
        [LOGIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
        [LOGIN_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
        [LOGOUT_SUCCESS]: state => ({ ...state, isLogin: false }),
    },
    initialState,
)

export default loginActions;