import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 1100px;
    margin: 0 auto;
    padding: .5rem 1rem;
    display: flex;
    height: 56px;
    align-items: center;
    .logo {
        margin-right: auto;
        color: #3d8b3d;
        font-weight: bold;
    }
    ul {
        display: flex;
    }
    ul a, ul span {
        color: rgba(0,0,0,.6);
        font-size: 0.9rem;
        margin-left: 1rem;
        cursor: pointer;
    }
`;

const Headers = ({ isLogin, logout, user }) => {
    const onClick = () => logout();

    return (
        <Nav>
            <Link to="/" className="logo">REALWORLD</Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {
                        isLogin ?
                        <Link to="/write">New Post</Link> : 
                        ''
                    }
                </li>
                <li>
                    {
                        isLogin ? 
                        <Link to={`/mypage/${user.email}`}>{user.email}</Link> :
                        <Link to="/login">로그인</Link>
                    }
                </li>
                <li>
                    {
                        isLogin ?
                        <span onClick={onClick}>로그아웃</span> :
                        <Link to="/join">회원가입</Link>
                    }
                </li>
            </ul>
        </Nav>
    )
};

export default Headers;