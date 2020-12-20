import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import login, { loginSaga } from './login';
import { appSaga } from './app';
import board, { boardSaga } from "./board";

const rootReducer = combineReducers({
    login,
    board
});

export function* rootSaga() {
    yield all([loginSaga(), appSaga(), boardSaga()]);
}

export default rootReducer;