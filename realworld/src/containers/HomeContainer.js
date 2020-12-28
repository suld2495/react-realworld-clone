import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';
import { getBoard, updateFavorite, optionLoad } from '../modules/board';

const HomeContainer = ({ articles, total, user, getBoard, updateFavorite, optionLoad }) => {
    useEffect(() => {
        optionLoad();
    }, []);
    return (
        <Home 
            getBoard={getBoard}
            articles={articles}
            total={total}
            user={user}
            updateFavorite={updateFavorite}
        />
    );
};

export default connect(
    state => ({
        articles: state.board.articles,
        total: state.board.total,
        user: state.login.user,
    }),
    {
        getBoard,
        updateFavorite,
        optionLoad
    }
)(HomeContainer);