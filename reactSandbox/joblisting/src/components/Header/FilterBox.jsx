import React, { Component } from 'react';

import Filter from './Filter';

import styled from 'styled-components';

class FilterBox extends Component {
    render() {
        const FilterBoxWrapper = styled.div`
            position:absolute;
            top:86px;
            left:0%;
            width:100%;
        `;

        const FilterBoxContainer = styled.div`
            padding:18px 40px;
            background-color:#fff;
            box-shadow:5px 9px 18px hsla(180, 29%, 50%, .3);
            max-width:1440px;
            margin:0 auto;
            border-radius:5px;
            display:grid;
            grid-template-columns:1fr auto;
            grid-gap:20px;
            align-items:center;
        `;

        const ClearBtn = styled.span`
            color:hsl(180, 29%, 50%);
            font-size:1rem;
            font-weight:700;
            cursor:pointer;

            &:hover{
                text-decoration: underline;
            }
        `;

        return (
            <FilterBoxWrapper>
                <FilterBoxContainer>
                    <div className="filtersContainer">
                        <Filter dummyProp="JavaScript" />
                        <Filter dummyProp="Frontend" />
                        <Filter dummyProp="CSS" />
                    </div>
                    <div className="clearContainer">
                        <ClearBtn>Clear</ClearBtn>
                    </div>
                </FilterBoxContainer>
            </FilterBoxWrapper>
        )
    }
}

export default FilterBox
