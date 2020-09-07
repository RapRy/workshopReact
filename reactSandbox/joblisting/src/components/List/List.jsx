import React from 'react'

import Job from './Job';

import styled from 'styled-components';

const List = () => {
    const ListWrapper = styled.div`
        position:relative;
        top:80px;
        left:0;
        width:100%;
        padding:0 20px;

        @media all and (max-width:375px){
            top:150px;
        }
    `;

    const ListContainer = styled.div`
        max-width:1440px;
        margin:0 auto;
    `;

    return (
        <ListWrapper>
            <ListContainer>
                <Job />
                <Job />
            </ListContainer>
        </ListWrapper>
    )
}

export default List;