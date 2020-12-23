import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login';
import { login, loginLoad } from '../modules/login';

const LoginContainer = ({ error, login, loginLoad }) => {
    return (
        <Login 
            error={error} 
            login={login} 
            loginLoad={loginLoad}
        />
    );
};

export default connect(
    state => ({ 
        error: state.login.error,
        isLogin: state.login.isLogin 
    }),
    {
        login,
        loginLoad
    }
)(LoginContainer);