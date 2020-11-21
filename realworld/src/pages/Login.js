import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginStyled = styled.div`
    width: 1140px;
    margin: 1.3rem auto;
    text-align: center;
    h1 {
        font-size: 2.3rem;
        margin-bottom: 1rem;
    }
    h1 + a {
        color: #5cb85c;
        margin-bottom: 1rem;
        display: block;
    }
    .container {
        width: 50%;
        margin: 0 auto;
    }
    input {
        margin-bottom: 1rem;
    }
    button {
        width: 106px;
        height: 51px;
        background: #5cb85c;
        border: 1px solid #5cb85c;
        color: #fff;
        border-radius: 3px;
        margin-left: auto;
        display: block;
        cursor: pointer;
    }
`;

const Login = () => {
    const onChange = () => {

    }
    const onSubmit = (e) => {
        console.log('안녕?');
        e.preventDefault();
    }
    
    return (
        <LoginStyled>
            <form className="container" onSubmit={onSubmit}>
                <h1>Sign In</h1>
                <Link to="/join">Need an account?</Link>
                <Input placeholder="Email" onChange={onChange}/>
                <Input placeholder="Password" onChange={onChange} />
                <Button type="submit">로그인</Button>
            </form>
        </LoginStyled>
    );
}

export default Login;