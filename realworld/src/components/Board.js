import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';

const BoardStyled = styled.div`
    border-top: 1px solid #dfdfdf;
    padding: 1.7em 0;
    .article-meta {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .profile {
        display: flex;
    }
    .profile div:first-child {
        margin-right: 5px;
    }
    .profile img {
        width: 32px;
        height: 32px;
        border-radius: 30px;
        display: inline-block;
        background-color: #d6d6d6;
    }
    .profile .info {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
    }
    .profile .username {
        font-size: 15px;
        color: #5cb85c;
        margin-bottom: 5px;
        width: 100%;
    }
    .profile .created {
        font-size: 12px;
    }
    .contents .title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 15px;
    }
    .contents .body {
        font-size: 15px;
        color: #797979;
        margin-bottom: 20px;
    }
    .contents span {
        font-size: 13px;
        color: #acacac;
    }
    .favorite {
        border: 1px solid #5cb85c;
        height: 24px;
        display: flex;
        align-items: center;
        padding: 0 4px;
        border-radius: 4px;
        color: #5cb85c;
        cursor: pointer;
    }
    .favorite.active {
        background: #5cb85c;
        border: none;
        color: #fff;
    }
    .favorite-count {
        margin-left: 5px;
        font-size: 13px;
    }
`;

const Board = ({ article, user, updateFavorite }) => {
    const handleUpdateFavorite = () => {
        if (user) {
            updateFavorite(article.id);
        } else {
            alert('로그인 후 이용가능 합니다.');
        }
    }
    return (
        <BoardStyled>
            <div className="article-meta">
                <div className="profile">
                    <div><img src={article.author.image} alt="" /></div>
                    <div className="info">
                        <Link className="username" to="/">{article.author.username}</Link>
                        <p className="created">{article.createdAt}</p>
                    </div>
                </div>
                <div className={`favorite ${user && article.favorites.includes(user.email) ? 'active' : ''}`} onClick={handleUpdateFavorite}>
                    <FontAwesomeIcon icon="heart"/>
                    <span className="favorite-count">{article.favoriteCount}</span>
                </div>
            </div>
            <Link className="contents" to="/">
                <h1 className="title">{article.title}</h1>
                <p className="body">{article.body}</p>
                <span>Read more...</span>
            </Link>
        </BoardStyled>
    )
};

export default Board;