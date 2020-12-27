import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Headers from "./layouts/Headers";

import LoginContainer from "./containers/LoginContainer";
import HomeContainer from './containers/HomeContainer';
import BoardWriteContainer from './containers/BoardWriteContainer';
import Join from "./pages/Join";

import { logout } from './modules/login';

import api from './api/api';
import { appLoad } from './modules/app';
import ArticleContainer from './containers/ArticleContainer';
import MypageContainer from './containers/MypageContainer';

function App({ isLogin, logout, appLoad, user }) {
    useEffect(() => {
        const token = window.localStorage.getItem('jwt');

        if (token) {
            api.setToken(token);
        }
        
        appLoad(token);
    }, []);
    
    return ( 
        <>
            <Headers isLogin={isLogin} logout={logout} user={user} />
            <Switch>
                <Route path="/" component={ HomeContainer } exact />
                <Route path = "/login" component={ LoginContainer }/> 
                <Route path = "/join" component={ Join }/> 
                <Route path = "/write" component={ BoardWriteContainer }/> 
                <Route path = "/article/:id" component={ ArticleContainer }/> 
                <Route path = "/mypage/:id" component={ MypageContainer }/> 
            </Switch > 
        </>
    );
}

export default connect(
    state => ({ 
        isLogin: state.login.isLogin,
        user: state.login.user 
    }),
    {
        logout,
        appLoad
    }
)(App);