import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleStyled = styled.div`
    .banner {
        height: 200px;
        background-color: #333;
        color: #fff;
        margin-bottom: 50px;
    }
    .banner > div {
        width: 940px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .banner h1 {
        font-size: 50px;
    }
    .banner p {
        margin-top: -50px;
        font-size: 20px;
    }
    .banner > div > * {
        width: 100%;
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
    .body {
        width: 940px;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .body .contents {
        margin-bottom: 50px;
        font-size: 22px;
    }
    .tags {
        padding-bottom: 50px;
        border-bottom: 1px solid #d3d3d3;
    }
    .tag {
        padding: 0px 11px;
        color: #cacaca;
        border: 1px solid #cacaca;
        border-radius: 30px;
        display: flex;
        width: 30px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        height: 18px;
    }
`;

const Article = ({ id, article, getBoardInfo }) => {
    useEffect(() => {
        getBoardInfo({ id });
    }, []);

    return (
        <ArticleStyled>
            <div className="banner">
                <div>
                    <h1>{ article.title }</h1>
                    <div className="profile">
                        <div><img src={article.author.image} alt="" /></div>
                        <div className="info">
                            <Link className="username" to="/">{article.author.username}</Link>
                            <p className="created">{article.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="contents">{article.content}</div>
                <div className="tags">
                    {
                        article.tag ?
                        <span className="tag">{article.tag}</span> :
                        ''
                    }
                    
                </div>
            </div>
        </ArticleStyled>
    );
};

export default Article;