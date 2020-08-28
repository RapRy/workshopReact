import React from 'react';

import removeIcon from '../../images/icon-remove.svg';

import styled from 'styled-components';

const Filter = ({ dummyProp }) => {

    const Filter = styled.div`
        margin-right:20px;
        display:inline-block;

        &:last-child{
            margin-right: 0;
        }
    `;

    const FilterName = styled.span`
        font-size:1rem;
        font-weight:700;
        padding:10px;
        border-radius:5px 0 0 5px;
        background-color:hsl(180, 52%, 96%);
        display:inline-block;
        color:hsl(180, 29%, 50%);
    `;

    const FilterCloseBtn = styled.span`
        padding:10px;
        border-radius:0 5px 5px 0;
        background-color:hsl(180, 29%, 50%);
        text-align:center;
        display:inline-block;
        cursor:pointer;

        &:hover{
            background-color:hsl(180, 14%, 20%);
        }

        > img{
            vertical-align:middle;
        }
    `;

    return (
        <Filter>
            <FilterName>{dummyProp}</FilterName>
            <FilterCloseBtn><img src={removeIcon} alt="Clear" /></FilterCloseBtn>
        </Filter>
    )
}

export default Filter;