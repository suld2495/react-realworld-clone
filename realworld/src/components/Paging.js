import React from 'react';
import styled from 'styled-components';

const PagingStyled = styled.div`
    width: 675px;
    margin: 0 auto;
`;

const Paging = ({ total, page, onClick }) => {
    const BLOCK = 10;
    const start = parseInt(page / BLOCK) * BLOCK + 1;
    const end = start + BLOCK - 1;

    return (
        <PagingStyled>
            <ul>
                {
                    total === 0 ? <li>1</li> :
                        Array(parseInt(total / BLOCK) + 1).fill(null).map((item, index) => {
                            const count = index + 1;
                            return count >= start && count <= end ? <li key={index}>{count}</li> : '';
                        })
                }
            </ul>
        </PagingStyled>
    )
};

export default Paging;