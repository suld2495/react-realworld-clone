import React from 'react';
import { connect } from 'react-redux';
import Mypage from '../pages/Mypage';
import { getBoard, updateFavorite } from '../modules/board';

const MypageContainer = ({ articles, total, user, getBoard, updateFavorite }) => {
    return (
        <Mypage 
            getBoard={getBoard}
            articles={articles}
            total={total}
            user={user}
            updateFavorite={updateFavorite}
        />
    )
};

export default connect(
    state => ({
        articles: state.board.articles,
        total: state.board.total,
        user: state.login.user,
    }),
    {
        getBoard,
        updateFavorite
    }
)(MypageContainer);