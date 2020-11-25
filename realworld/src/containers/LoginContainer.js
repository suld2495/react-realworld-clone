import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login';
import { login } from '../modules/login';

const LoginContainer = ({ error, login }) => {
    return (
        <Login error={error} login={login} />
    );
};

export default connect(
    state => ({ 
        error: state.login.error 
    }),
    {
        login
    }
)(LoginContainer);