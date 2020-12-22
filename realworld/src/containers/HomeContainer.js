import React from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import { getBoard } from '../modules/board';

const HomeContainer = ({ articles, total, isLogin, getBoard }) => {
    return (
        <Home 
            getBoard={getBoard}
            articles={articles}
            total={total}
            isLogin={isLogin}
        />
    );
};

export default connect(
    state => ({
        articles: state.board.articles,
        total: state.board.total,
        isLogin: state.login.isLogin,
    }),
    {
        getBoard
    }
)(HomeContainer);