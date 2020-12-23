import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const BoardListStyled = styled.div`
    margin: 0 auto;
    width: 675px;

    .empty {
        padding: 100px 20px;
        text-align: center;
        color: #7e7e7e;
    }
`

const BoardList = ({ articles, user, updateFavorite }) => {
    return (
        <BoardListStyled>
            {articles.map((article, index) => {
                return <Board article={article} key={index} user={user} updateFavorite={updateFavorite} />  
            })}
            {
                articles.length === 0 ? <div className="empty">게시글이 존재하지 않습니다.</div> : ''
            }
        </BoardListStyled>
    )
};

export default BoardList;