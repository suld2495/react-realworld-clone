import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import login, { loginSaga } from './login';
import { appSaga } from './app';

const rootReducer = combineReducers({
    login,
});

export function* rootSaga() {
    yield all([loginSaga(), appSaga()]);
}

export default rootReducer;