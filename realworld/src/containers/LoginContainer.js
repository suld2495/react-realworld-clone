import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login';
import { login } from '../modules/login';

const LoginContainer = ({ error, login, history, isLogin }) => {
    return (
        <Login 
            error={error} 
            login={login} 
            history={history}
            isLogin={isLogin} />
    );
};

export default connect(
    state => ({ 
        error: state.login.error,
        isLogin: state.login.isLogin 
    }),
    {
        login
    }
)(LoginContainer);