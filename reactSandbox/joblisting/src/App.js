import React, { Component } from 'react';

import GlobalStyle from './globalStyles';

import { Header, List } from './components';

// import styled from 'styled-components';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            filters: [],
            filtersRef: [],
            dataRef: []
        }
    }
    componentDidMount(){
        this.fetchDatas();
    }

    setFilterRef = () => {
        const data = [];
        this.state.data.forEach((val) => {
            const filters = [val.level, val.role, ...val.tools, ...val.languages];
            data.push(filters);
        })

        this.setState({filtersRef: data})
    }

    sortJobbings = async () => {

        const filters = this.state.filters
        const filtersRef = this.state.filtersRef
        let idCont = [];
        let sortedData = [];
        let datas = this.state.dataRef;

        filters.forEach((filter) => {
            filtersRef.forEach((filRef, id) => {
                if(filRef.includes(filter)){
                    idCont.push(id);

                }
            })
        })

        let idContSorted = idCont.sort().filter((idC, i, arr) => !i || idC !== arr[i-1]);


        datas.forEach((data, i) => {
            idContSorted.forEach((idC) => {
                if(idC === i) sortedData.push(data);
            })
        })

        this.setState({data:sortedData})
    }

    async fetchDatas(){
        try{
            const res = await fetch("./api/data.json")
            if(!res.ok){
                throw Error(res.statusText);
            }else{
                const data = await res.json();
                this.setState({ data: data, dataRef: data })
                this.setFilterRef();
            }
        }catch(err){
            console.log(err)
        }
            
    }

    addFilters = (e) => {
        const filterName = e.target.innerHTML;
        const duplicate = this.state.filters.includes(filterName);

        !duplicate && 
            this.setState({filters: [...this.state.filters, filterName]}, 
                () => {
                    this.sortJobbings()
                }
            );
    }

    clearFilters = () => {
        this.setState({filters: []}, 
            () => {
                this.setState({data: this.state.dataRef})
            }    
        );
    }

    removeFilter = (e) => {
        const filterName = e.currentTarget.previousElementSibling.innerHTML;

        const result = this.state.filters.filter((filt) => filterName !== filt);

        this.setState({filters: result}, 
            () => {
                if(this.state.filters.length > 0){
                    this.sortJobbings()
                }else{
                    this.setState({data: this.state.dataRef})
                }
            }  
        );
    }

    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <div>
                    <Header filters={this.state.filters} removeFilter={this.removeFilter} sortJobbings={this.sortJobbings} clearFilters={this.clearFilters}/>
                    <List datas={this.state.data} addFilters={this.addFilters} />
                </div>
            </React.Fragment>
        )
    }
}

export default App;


