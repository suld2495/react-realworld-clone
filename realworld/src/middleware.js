import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './modules/login';
import api from './api/api';

const localStorageMiddleware = store => next => action => {
    if (action.type === LOGIN_SUCCESS) {
        if (!action.payload.error) {
            window.localStorage.setItem('jwt', action.payload.user.token);
            api.setToken(action.payload.user.token);
        }
    } else if (action.type === LOGOUT_SUCCESS) {
        window.localStorage.setItem('jwt', '');
        api.setToken(null);
    }

    next(action);
};

export { localStorageMiddleware };