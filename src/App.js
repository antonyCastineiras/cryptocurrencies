import React, { Component } from 'react';
import './App.css';
import {Table} from "./components/table";
import {Header} from "./components/header";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            results: [],
            updateResults: '',
            timeSinceUpdate: 0,
            currency: 'USD'
        };

        this.apiUrl = this.apiUrl.bind(this);
        this.updateResults = this.updateResults.bind(this);
        this.updateTimeSinceUpdate = this.updateTimeSinceUpdate.bind(this);
        this.updateCurrency = this.updateCurrency.bind(this);
    }

    fetchApi(url){
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    results : this.mapDataToArray(data)
                });
            }).catch((err) => console.log(err));
    }

    apiUrl(){
        return ("https://api.coinmarketcap.com/v2/ticker/?convert=" + this.state.currency + "&limit=10/");
    }

    updateResultsInterval() {
        return 60000
    }

    // Currency Conversion
    updateCurrency(){
        let currency = this.child.menu.value;

        console.log(currency);
        this.setState({
            currency: currency
        });

        this.fetchApi(this.apiUrl());
    }

    componentWillMount(){
        console.log(this.apiUrl())
        this.fetchApi(this.apiUrl());

        // Update and call new results every minute
        setInterval(this.updateResults, this.updateResultsInterval());
        setInterval(this.updateTimeSinceUpdate, 1000)

    }

    updateTimeSinceUpdate() {
        this.setState({ timeSinceUpdate: this.state.timeSinceUpdate + 1 })
    }

    updateResults() {
        this.fetchApi(this.apiUrl());
        console.log("Results have updated" + this);
        console.log(this.state.timeSinceUpdate)
    }

    // Due to data structure keys need to be found to access the Objects
    mapDataToArray(input){
        const keys =  Object.keys(input.data);

        let  mappedArray = [];

        keys.forEach((i) =>{

            mappedArray.push(input.data[i]);

        });

        return mappedArray;
    }

  render() {
      if ( this.state.timeSinceUpdate >= this.updateResultsInterval() / 1000 ) {
          this.setState({ timeSinceUpdate: 0 })
      }

    return (
        <div className={"container"}>
            <Header
                timeSinceUpdate={this.state.timeSinceUpdate}
                updateCurrency={this.updateCurrency}
                ref={(node)=> {this.child = node;}}
            />
            <Table
                results={ this.state.results }
                currency={ this.state.currency }
            />
        </div>

    );
  }
}

export default App;
