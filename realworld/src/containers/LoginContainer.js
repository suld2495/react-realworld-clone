import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login';

const LoginContainer = () => {
    return (
        <Login />
    );
};

export default connect(
    state => ({

    }), 
    {
        
    }
)(LoginContainer);