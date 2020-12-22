import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const BoardListStyled = styled.div`
    margin: 0 auto;
    width: 675px;
`

const BoardList = ({ articles }) => {
    return (
        <BoardListStyled>
            {articles.map((article, index) => {
                return <Board article={article} key={index}/>  
            })}
        </BoardListStyled>
    )
};

export default BoardList;