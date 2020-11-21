import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'login/LOGIN';

export const login = createAction(LOGIN);

const initialState = {};

const loginActions = handleActions(
    {
        [LOGIN]: state => '',
    },
    initialState,
)

export default loginActions;