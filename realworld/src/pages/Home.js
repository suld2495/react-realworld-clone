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
    .tab {
        width: 675px;
        margin: 0 auto;
    }
    .tab li {
        color: #5cb85c;
        display: inline-block;
        padding: 20px;
        border-bottom: 2px solid #5cb85c;
    }
`;

const Home = ({ articles, total, user, getBoard, updateFavorite }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getBoard({
            page: 1,
            all: true
        });
    }, [user]);

    const onClick = (currentPage) => {
        setPage(currentPage);
        getBoard({
            page: currentPage
        })
    }

    const getGlobalFeed = () => {
        getBoard({
            page: 1,
            all: true
        });
    }

    return (
        <HomeStyled>
            <div className="banner">
                <h1>conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
            <div className="tab">
                <ul>
                    <li onClick={getGlobalFeed}>Global Feed</li>
                    {
                        user ? <li>your feed</li> : ''
                    }
                </ul>
            </div>
            <BoardList articles={articles} user={user} updateFavorite={updateFavorite}/>
            <Paging 
                total={total} 
                onClick={onClick}
                page={page}
            />
        </HomeStyled>
    )
};

export default Home;