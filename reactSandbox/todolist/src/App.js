import React from 'react';
import axios from 'axios';

import Instructions from './components/Instructions';
import AddInput from './components/AddInput';

class App extends React.Component{
    render(){
        return(
            <main className="mainContainer">
                <section className="createContainer">
                    <div className="addListContainer">
                        <Instructions />
                        <AddInput />
                    </div>
                </section>
            </main>
        )
    }
}

export default App;