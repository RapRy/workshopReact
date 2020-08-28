import React, { Component } from 'react';

import GlobalStyle from './globalStyles';

import { Header } from './components';

// import styled from 'styled-components';

class App extends Component {
    render() {

        return (
            <React.Fragment>
                <GlobalStyle />
                <div>
                    <Header />
                </div>
            </React.Fragment>
        )
    }
}

export default App;


