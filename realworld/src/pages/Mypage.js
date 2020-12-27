import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';
import Paging from '../components/Paging';
import Smiley from '../assets/images/smiley-cyrus.jpg';

const MypageStyled = styled.div`
    .banner {
        height: 200px;
        background-color: #f3f3f3;
        color: #111;
        text-align: center;
        margin-bottom: 50px;
    }
    .banner-container {
        width: 940px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
    }
    .banner .profile img {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        display: inline-block;
        background-color: #d6d6d6;
    }
    .banner .profile {
        font-size: 50px;
    }
    .banner span {
        position: absolute;
        bottom: 10px;
        border: 1px solid #c7c7c7;
        border-radius: 3px;
        display: inline-block;
        width: auto;
        right: 0;
        font-size: 12px;
        padding: 5px 10px;
        color: #888787;
        cursor: pointer;
    }
    .banner p {
        margin-top: -50px;
        font-size: 20px;
        right: 0;
    }
    .banner-container * {
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
        cursor: pointer;
    }
    .tab li.active {
        border-bottom: 2px solid #5cb85c;
    }
`;

const Mypage = ({ articles, total, user, getBoard, updateFavorite, email, getUserInfo, mypageUser }) => {
    const [page, setPage] = useState(1);
    useEffect(() => {
        getBoard({
            page: 1,
            email
        });
        getUserInfo(email);
    }, [user]);

    const onClick = (currentPage) => {
        setPage(currentPage);
        getBoard({
            page: currentPage,
            email
        })
    }

    const getGlobalFeed = () => {
        getBoard({
            page: 1,
            email
        });
    }

    const getYourFeed = () => {
        getBoard({
            page: 1,
            email
        });
    }
    
    return (
        <MypageStyled>
            <div className="banner">
                <div className="banner-container">
                    <div className="profile">
                        <img src={mypageUser.image || Smiley} alt="" />
                    </div>
                    <p>{mypageUser.username}</p>
                    {
                        user.email !== mypageUser.email ?
                            <span>Follow {mypageUser.username}</span> :
                            ''
                    }
                    
                </div>
            </div>
            <div className="tab">
                <ul>
                    <li className='active' onClick={getYourFeed}>My Articles</li>
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