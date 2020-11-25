import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Error from '../components/Error';
import Input from '../components/Input';

const JoinStyled = styled.div`
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


const Join = () => {
    const [error, setError] = useState(false);
    let username = '';
    let email = '';
    let password = '';

    const onChangeUsername = value => username = value;
    const onChangeEmail = value => email = value;
    const onChangePassword = value => password = value;
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (    
        <JoinStyled>
            <form className="container" onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <Link to="/login">Have an account?</Link>
                { 
                    error ? 
                        '' : 
                        ''
                }
                <Input placeholder="Username" onChange={onChangeUsername}/>
                <Input placeholder="Email" onChange={onChangeEmail}/>
                <Input placeholder="Password" onChange={onChangePassword} />
                <Button type="submit">회원가입</Button>
            </form>
        </JoinStyled>
    );
};

export default Join;
