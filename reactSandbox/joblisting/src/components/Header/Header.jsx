import React from 'react';

import styled from 'styled-components';

import bgHeaderDesktop from '../../images/bg-header-desktop.svg';

import FilterBox from './FilterBox';

const Header = () => {

    const BgContainer = styled.div`
        background-color: hsl(180, 29%, 50%);
        height:120px;
        position:relative;
    `;

    const BgHeader = styled.img`
        width:100%;
        height:100%;
        object-fit:cover;
    `;

    return (
        <div className="header">
            <BgContainer>
                <BgHeader src={bgHeaderDesktop} alt="background" />
                <FilterBox />
            </BgContainer>
        </div>
    )
}

export default Header;