import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PagingStyled = styled.div`
    width: 675px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    ul {
        display: flex;
    }

    li {
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        color: #3d8b3d;
        cursor: pointer;
    }
    li.active {
        color: red;
    }
`;

const Paging = ({ total, page, onClick }) => {
    const BLOCK = 10;
    const last = parseInt(total / BLOCK) + 1;

    const start = parseInt((page - 1) / BLOCK) * BLOCK + 1;
    const end = start + BLOCK - 1 > last ? last : start + BLOCK - 1;
    
    const leftStart = start - BLOCK < 0 ? 1 : start - BLOCK;
    const rightEnd = end + 1 > last ? last : end + 1; 

    return (
        <PagingStyled>
            <ul>
                <li className="arrow" onClick={() => onClick(1)}><FontAwesomeIcon icon="angle-double-left" /></li>
                <li className="arrow" onClick={() => onClick(leftStart)}><FontAwesomeIcon icon="angle-left" /></li>
                {
                    total === 0 ? <li>1</li> :
                        Array(end - start + 1).fill(null).map((item, index) => {
                            const count = index + start;
                            return count >= start && count <= end ? 
                                <li onClick={() => onClick(count)} 
                                    key={index} 
                                    className={count === page ? 'active' : ''}>{count}
                                </li> : '';
                        })
                }
                <li className="arrow" onClick={() => onClick(rightEnd)}><FontAwesomeIcon icon="angle-right" /></li>
                <li className="arrow" onClick={() => onClick(last)}><FontAwesomeIcon icon="angle-double-right" /></li>
            </ul>
        </PagingStyled>
    )
};

export default Paging;