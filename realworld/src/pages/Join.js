import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Error from '../components/Error';
import Input from '../components/Input';
import * as utils from '../lib/utils';
import messages from '../lib/messages.json';

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
    const [error, setError] = useState({});
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const onChangeParam = param => {
        return value => {
            setUser({
                ...user,
                [param]: value
            })
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;
    }
    const validate = () => {
        const error = {};

        for (const value in user) {
            error[value] = !utils[`check${utils.capitalize(value)}Regex`](user[value]);
        }

        setError(error);
    }
    const createErrorMessage = () => {
        return Object.entries(error).map(value => {
            return value[1] ? (
                <Error key={value[0]}>{messages.validate[value[0]]}</Error>
            ) : ''
        });
    }
    return (    
        <JoinStyled>
            <form className="container" onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <Link to="/login">Have an account?</Link>
                { 
                    createErrorMessage()
                }
                {
                    Object.keys(user).map(value => {
                        return (
                            <Input
                                key={value} 
                                placeholder={utils.capitalize(value)} 
                                onChange={onChangeParam(value)}/>
                        )
                    })
                }
                <Button type="submit">회원가입</Button>
            </form>
        </JoinStyled>
    );
};

export default Join;