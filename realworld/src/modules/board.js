import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../api/api';

const FETCH_BOARD_REQUEST = 'board/FETCH_BOARD_REQUEST';
const FETCH_BOARD_SUCCESS = 'board/FETCH_BOARD_SUCCESS';
const FETCH_BOARD_FAILURE = 'board/FETCH_BOARD_FAILURE';

export const getBoard = createAction(FETCH_BOARD_REQUEST);

function* getBoardSaga(action) {
    try {
        const result = yield call(api.getBoard, action.payload);
        yield put({
            type: FETCH_BOARD_SUCCESS,
            payload: { articles: result.articles, total: result.total }
        })
    } catch (e) {
        yield put({
            type: FETCH_BOARD_FAILURE,
            payload: { articles: [], total: 0 },
            error: true
        })
    }
}

export function* boardSaga() {
    yield takeEvery(FETCH_BOARD_REQUEST, getBoardSaga);
};

const initialState = { articles: [], total: 0 };

const boardActions = handleActions(
    {
        [FETCH_BOARD_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
        [FETCH_BOARD_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
    },
    initialState
);

export default boardActions;

