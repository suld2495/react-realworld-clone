import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginContainer from "./containers/LoginContainer";
import Headers from "./layouts/Headers";
import Join from "./pages/Join";
import { logout } from './modules/login';

import api from './api/api';
import { appLoad } from './modules/app';

function App({ isLogin, logout, appLoad }) {
    useEffect(() => {
        const token = window.localStorage.getItem('jwt');

        if (token) {
            api.setToken(token);
        }
        
        appLoad(token);
    });
    
    return ( 
        <>
            <Headers isLogin={isLogin} logout={logout} />
            <Switch>
                <Route path = "/login" component = { LoginContainer }/> 
                <Route path = "/join" component = { Join }/> 
            </Switch > 
        </>
    );
}

export default connect(
    state => ({ 
        isLogin: state.login.isLogin 
    }),
    {
        logout,
        appLoad
    }
)(App);