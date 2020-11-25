import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: ${props => props.size === 'middle' ? '300px' : '100px'};
    height: ${props => props.size === 'middle' ? '70px' : '30px'};
`;

const Button = ({ type, children }) => {
    return (
        <ButtonStyled type={type}>
            {children}
        </ButtonStyled>
    )
};

export default Button;