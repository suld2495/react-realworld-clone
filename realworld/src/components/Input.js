import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    width: 100%;
    height: 51px;
    padding: .75rem 1.5rem;
    font-size: 1.05rem;
    border-radius: .3rem;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,.15);
`;

const Input = ({ placeholder = '', onChange }) => {
    const [value, setValue] = useState('');
    const type = placeholder === 'Password' ? placeholder : 'text';
    const handlerChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <InputStyled type={type} placeholder={placeholder} onChange={handlerChange}/>
    )
};

export default Input;