import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Mypage from '../pages/Mypage';
import { getBoard, updateFavorite, getUserInfo } from '../modules/board';

const MypageContainer = ({ match, articles, total, user, getBoard, updateFavorite, getUserInfo, mypageUser }) => {
    return (
        <Mypage
            email={match.params.email} 
            getBoard={getBoard}
            articles={articles}
            total={total}
            user={user}
            updateFavorite={updateFavorite}
            getUserInfo={getUserInfo}
            mypageUser={mypageUser}
        />
    )
};

export default connect(
    state => ({
        articles: state.board.articles,
        total: state.board.total,
        user: state.login.user,
        mypageUser: state.board.user
    }),
    {
        getBoard,
        updateFavorite,
        getUserInfo
    }
)(MypageContainer);