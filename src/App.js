import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Gallery from './components/Gallery';



class App extends Component {

	state = {
		searchTerm: '',
		results: [
			'tree',
			'animal',
			'food'
		]
	};




  render() {
    return (
      <div>
				<Header />
				
				<Gallery 
					items={this.state.results}
				/>

      </div>
    );
  }
}

export default App;
