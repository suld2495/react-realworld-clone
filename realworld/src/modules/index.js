import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import login, { loginSaga } from './login';

const rootReducer = combineReducers({
    login
});

export function* rootSaga() {
    yield all([loginSaga()]);
}

export default rootReducer;