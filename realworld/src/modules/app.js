import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery, getContext } from 'redux-saga/effects'
import { currentUser } from '../api/api';

import { LOGIN_SUCCESS } from './login';

const APP_LOAD = 'app/APP_LOAD';

export const appLoad = createAction(APP_LOAD, (token) => ({ token }));

function* currentUserSaga(action) {
    const result = yield call(currentUser, action.payload.token);
    yield put({
        type: LOGIN_SUCCESS,
        payload: { isLogin: true, error: false, user: result }
    });
}

export function* appSaga() {
    yield takeEvery(APP_LOAD, currentUserSaga);
}
