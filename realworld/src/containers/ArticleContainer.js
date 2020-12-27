import React from 'react';
import { connect } from 'react-redux';
import Article from '../pages/Article';
import { getBoardInfo } from '../modules/board';

const ArticleContainer = ({ match, article, getBoardInfo }) => {
    return (
        <Article 
            id={match.params.id}
            article={article}
            getBoardInfo={getBoardInfo}
        />
    )
};

export default connect(
    state => ({
        article: state.board.article
    }),
    {
        getBoardInfo
    }
)(ArticleContainer);
