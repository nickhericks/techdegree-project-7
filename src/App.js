import React, { Component } from 'react';
import { 
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import './App.css';
import apiKey from './config.js';

import Header from './components/Header';
import Gallery from './components/Gallery';



class App extends Component {
  state = {
    searchTerm: "",
    results: [],
    loading: true
  };



  componentDidMount() {
		this.performSearch();
  }

  performSearch = (query = 'dogs') => {
  	fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      // .then(responseData => console.log(responseData.photos.photo))
      .then(responseData => {
        this.setState({
          results: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  }

	
  render() {
    console.log(this.state.results);
    return (
      <BrowserRouter>
        <div className="container">
          <Header newSearch={this.performSearch} />

          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <Gallery
              pictures={this.state.results}
              // query={this.state.searchTerm}
            />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
