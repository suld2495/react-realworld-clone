import React from 'react';
import { connect } from 'react-redux';
import Article from '../pages/Article';
import { getBoardInfo, deleteBoard } from '../modules/board';

const ArticleContainer = ({ match, user, article, getBoardInfo,deleteBoard }) => {
    return (
        <Article 
            id={match.params.id}
            article={article}
            getBoardInfo={getBoardInfo}
            user={user}
            deleteBoard={deleteBoard}
        />
    )
};

export default connect(
    state => ({
        article: state.board.article,
        user: state.login.user
    }),
    {
        getBoardInfo,
        deleteBoard
    }
)(ArticleContainer);
