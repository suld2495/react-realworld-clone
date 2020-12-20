import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';
import Paging from '../components/Paging';

const HomeStyled = styled.div`
    .banner {
        height: 200px;
        background-color: #5cb85c;
        color: #fff;
        text-align: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }
    .banner h1 {
        font-size: 50px;
    }
    .banner p {
        margin-top: -50px;
        font-size: 20px;
    }
    .banner * {
        width: 100%;
    }
`;

const Home = ({ articles, total, getBoard }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    const onClick = () => {

    }

    return (
        <HomeStyled>
            <div className="banner">
                <h1>conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
            <BoardList articles={articles} />
            <Paging 
                total={total} 
                onClick={onClick}
                page={page}
            />
        </HomeStyled>
    )
};

export default Home;