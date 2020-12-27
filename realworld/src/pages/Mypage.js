import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';
import Paging from '../components/Paging';

const MypageStyled = styled.div`
    .tab {
        width: 675px;
        margin: 0 auto;
    }
    .tab li {
        color: #5cb85c;
        display: inline-block;
        padding: 20px;
        cursor: pointer;
    }
    .tab li.active {
        border-bottom: 2px solid #5cb85c;
    }
`;

const Mypage = ({ articles, total, user, getBoard, updateFavorite }) => {
    const [page, setPage] = useState(1);
    const [all, setAll] = useState(false);

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
        setAll(true);
    }

    const getYourFeed = () => {
        getBoard({
            page: 1,
            all: false
        });
        setAll(false);
    }
    
    return (
        <MypageStyled>
            <div className="tab">
                <ul>
                    <li className={`${all ? 'active': ''}`} onClick={getGlobalFeed}>Global Feed</li>
                    {
                        user ? <li className={`${!all ? 'active': ''}`} onClick={getYourFeed}>Your Feed</li> : ''
                    }
                </ul>
            </div>
            <BoardList articles={articles} user={user} updateFavorite={updateFavorite}/>
            <Paging 
                total={total} 
                onClick={onClick}
                page={page}
            />
        </MypageStyled>
    )
};

export default Mypage;