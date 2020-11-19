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
    ul a {
        color: rgba(0,0,0,.6);
        font-size: 0.9rem;
        margin-left: 1rem;
    }
`;

const Headers = () => {
    return (
        <Nav>
            <Link to="/" className="logo">REALWORLD</Link>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">로그인</Link>
                <Link to="/join">회원가입</Link>
            </ul>
        </Nav>
    )
};

export default Headers;