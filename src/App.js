import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Gallery from './components/Gallery';



class App extends Component {
  state = {
    searchTerm: "",
    results: ["tree", "animal", "food"]
  };


  handleNewSearch = query => {
		console.log(this.state.searchTerm);
		this.setState(prevState => {
      return {
        searchTerm: query
      };
    });
  };



	
  render() {
    return (
      <div className="container">
        
				<Header 
					newSearch={this.handleNewSearch} 
				/>

        <Gallery
					items={this.state.results}
				/>

      </div>
    );
  }
}

export default App;
