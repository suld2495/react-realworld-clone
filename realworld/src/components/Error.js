import React from 'react';
import styled from 'styled-components';

const ErrorStyled = styled.p`
    color: #b85c5c;
    font-size: 12px;
    font-weight: bold;
    margin: 20px 0;
    position: relative;
    padding-left: 10px;
    text-align: left;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #b85c5c; 
    }
`;

const Error = ({ children }) => {
    return (
        <ErrorStyled>{children}</ErrorStyled>
    )
}

export default Error;