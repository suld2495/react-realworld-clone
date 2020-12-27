import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery, getContext, select } from 'redux-saga/effects'
import * as api from '../api/api';
import { GO_TO_HOME } from './login';

const FETCH_BOARD_REQUEST = 'board/FETCH_BOARD_REQUEST';
const FETCH_BOARD_SUCCESS = 'board/FETCH_BOARD_SUCCESS';
const FETCH_BOARD_FAILURE = 'board/FETCH_BOARD_FAILURE';

const UPDATE_BOARD_REQUEST = 'board/UPDATE_BOARD_REQUEST';
const UPDATE_BOARD_SUCCESS = 'board/UPDATE_BOARD_SUCCESS';
const UPDATE_BOARD_FAILURE = 'board/UPDATE_BOARD_FAILURE';

const FETCH_BOARD_INFO_REQUEST = 'board/FETCH_BOARD_INFO_REQUEST';
const FETCH_BOARD_INFO_SUCCESS = 'board/FETCH_BOARD_INFO_SUCCESS';

const EDIT_BOARD_FIELD_REQUEST = 'board/EDIT_BOARD_FIELD_REQUEST';

const UPDATE_FAVORITE = 'board/UPDATE_FAVORITE';

const GO_TO_ARTICLE = 'board/GO_TO_ARTICLE';

export const getBoard = createAction(FETCH_BOARD_REQUEST, option => option);
export const getBoardInfo = createAction(FETCH_BOARD_INFO_REQUEST, id => id);
export const updateBoard = createAction(UPDATE_BOARD_REQUEST, article => article);
export const editBoardField = createAction(EDIT_BOARD_FIELD_REQUEST, (key, value) => ({key, value}));
export const updateFavorite = createAction(UPDATE_FAVORITE, id => ({ id }));

function* getBoardSaga(action) {
    try {
        const result = yield call(api.getBoard, action.payload);
        yield put({
            type: FETCH_BOARD_SUCCESS,
            payload: { articles: result.articles, total: result.total, option: action.payload }
        })
    } catch (e) {
        yield put({
            type: FETCH_BOARD_FAILURE,
            payload: { articles: [], total: 0 },
            error: true
        })
    }
}

function* getBoardInfoSaga(action) {
    try {
        const article = yield call(api.getBoardInfo, action.payload.id);

        if (!article) {
            throw Error();
        }

        yield put({
            type: FETCH_BOARD_INFO_SUCCESS,
            payload: { article }
        })  
    } catch (e) {
        alert('존재하지 게시글입니다.');
        yield put({
            type: GO_TO_HOME
        });
    }
}

function* goToArticleSaga(action) {
    const history = yield getContext('history');
    history.push('/article/' + action.payload.id);
}

function* updateBoardSaga(action) {
    try {
        const author = yield select(state => state.login.user);
        const id = yield call(api.updateBoard, { ...action.payload, author });
        yield put({
            type: UPDATE_BOARD_SUCCESS,
        })
        yield put({
            type: GO_TO_ARTICLE,
            payload: { id }
        });
    } catch (e) {
        yield put({
            type: UPDATE_BOARD_FAILURE,
            error: true
        })
    }
}

function* updateFavoriteSaga(action) {
    
    try {
        const user = yield select(state => state.login.user);
        const option = yield select(state => state.board.option)
        yield call(api.updateFavorite, { user, id: action.payload.id });
        yield put({
            type: FETCH_BOARD_REQUEST,
            payload: { ...option }
        })
    } catch (e) {

    }
}

export function* boardSaga() {
    yield takeEvery(FETCH_BOARD_REQUEST, getBoardSaga);
    yield takeEvery(UPDATE_BOARD_REQUEST, updateBoardSaga);
    yield takeEvery(GO_TO_ARTICLE, goToArticleSaga);
    yield takeEvery(UPDATE_FAVORITE, updateFavoriteSaga);
    yield takeEvery(FETCH_BOARD_INFO_REQUEST, getBoardInfoSaga);
};

const initialState = { 
    articles: [], 
    total: 0, 
    option: {}, 
    article: {
        title: '',
        desc: '',
        content: '',
        tag: ''
    }
};

const boardActions = handleActions(
    {
        [FETCH_BOARD_SUCCESS]: (state, action) => ({ 
            ...state, 
            ...action.payload, 
            option: { 
                ...state.option, 
                ...action.payload.option 
            } 
        }),
        [FETCH_BOARD_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
        [UPDATE_BOARD_SUCCESS]: state => ({ 
            ...state, 
            article: {
                title: '',
                desc: '',
                content: '',
                tag: ''
            } 
        }),
        [EDIT_BOARD_FIELD_REQUEST]: (state, action) => ({ ...state, article: {
            ...state.article,
            [action.payload.key]: action.payload.value
        }}),
        [FETCH_BOARD_INFO_SUCCESS]: (state, action) => ({ ...state, ...action.payload })
    },
    initialState
);

export default boardActions;

