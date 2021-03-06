import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery, getContext, select } from 'redux-saga/effects'
import * as api from '../api/api';

const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';

const LOGOUT_REQUEST = 'login/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'login/LOGOUT_SUCCESS';

const ADD_FOLLOWER_REQUEST = 'login/ADD_FOLLOWER_REQUEST';
const ADD_FOLLOWER_SUCCESS = 'login/ADD_FOLLOWER_SUCCESS';

const LOGIN_LOAD = 'login/LOGIN_LOAD';

const GO_TO_HOME = 'login/GO_TO_HOME';

export { 
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    GO_TO_HOME
} 

export const login = createAction(LOGIN_REQUEST, (email, password) => ({ email, password }));
export const logout = createAction(LOGOUT_SUCCESS, (email, password) => ({ email, password }));
export const loginLoad = createAction(LOGIN_LOAD);
export const addFollower = createAction(ADD_FOLLOWER_REQUEST, (email) => ({ email }));

function* getLoginSaga(action) {
    try {
        const result = yield call(api.login, action.payload);
        const check = !!result;
        if (check) {
            yield put({
                type: LOGIN_SUCCESS,
                payload: { isLogin: check, error: !check, user: result }
            });
            yield put({
                type: GO_TO_HOME,
            });
        } else {
            throw new Error();
        }
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

function* addFollowerSaga(action) {
    try {
        const userData = yield select(state => state.login.user);
        const newUser = yield call(api.addFollower, { userData, email: action.payload.email });

        yield put({
            type: ADD_FOLLOWER_SUCCESS,
            payload: { user: newUser }
        })
    } catch(e) {

    }
}

export function* loginSaga() {
    yield takeEvery(LOGOUT_REQUEST, logoutSaga);
    yield takeEvery(LOGIN_REQUEST, getLoginSaga);
    yield takeEvery(GO_TO_HOME, goToHomeSaga);
    yield takeEvery(ADD_FOLLOWER_REQUEST, addFollowerSaga);
}

const initialState = { isLogin: false, error: false, user: {} };

const loginActions = handleActions(
    {
        [LOGIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload, token: action.payload.token || null }),
        [LOGIN_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
        [LOGOUT_SUCCESS]: state => ({ ...state, isLogin: false }),
        [LOGIN_LOAD]: state => ({ ...state, error: false }),
        [ADD_FOLLOWER_SUCCESS]: (state, action) => ({ ...state, user: action.payload.user })
    },
    initialState,
)

export default loginActions;