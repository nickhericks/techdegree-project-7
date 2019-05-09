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
		fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      // .then(responseData => console.log(responseData.photos.photo))
      .then(responseData => {
        this.setState({ results: responseData.photos.photo, loading: false });
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	}

  // handleNewSearch = query => {
	// 	console.log(this.state.searchTerm);
	// 	this.setState(prevState => {
  //     return {
  //       searchTerm: query
  //     };
  //   });
  // };

	// performSearch = (query = 'dogs') => {
	// 	fetch(
  //     `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=&format=json&nojsoncallback=1`
	// 	)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data.message))
	// 	// .then(response => response.json())
	// 	// .then(responseData => {
	// 	// 	this.setState({ results: responseData.data})
	// 	// })
	// }


	
  render() {
		console.log(this.state.results);
    return (
			<BrowserRouter>
				<div className="container">
					
					<Header 
						newSearch={this.performSearch} 
					/>

					{
						(this.state.loading)
						? <p>Loading...</p>
						: <Gallery
								pictures={this.state.results}
								// query={this.state.searchTerm}
							/>
					}

				</div>
			</BrowserRouter>
    );
  }
}

export default App;
