import React, { Component } from 'react';
import { 
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import './App.css';
import apiKey from './config.js';

// Import components
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';


class App extends Component {
  state = {
    loading: true,
		searchTerm: "",
		results: [],
		mountainResults: [],
		dogResults: [],
		sunsetResults: []
  };

	// Trigger API requests for tabbed topics after App component is mounted
  componentDidMount() {
		this.performSearch('mountains')
		this.performSearch('dogs')
		this.performSearch('sunset')
  }


  performSearch = (query = 'mountains') => {
		this.setState({
			loading: true
		});
  	fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
				if(query === 'mountains') {
					this.setState({
						mountainResults: responseData.photos.photo,
						loading: false
					});
				} else if (query === 'dogs') {
					this.setState({
						dogResults: responseData.photos.photo,
						loading: false
					});
				} else if (query === 'sunset') {
					this.setState({
						sunsetResults: responseData.photos.photo,
						loading: false
					});
				} else {
					this.setState({
						results: responseData.photos.photo,
						searchTerm: query,
						loading: false
					});
				}
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header newSearch={this.performSearch} />

					<Switch>
						<Route exact path="/" render={ () =>
							<Redirect to='/mountains' />



						} />
						<Route exact path="/mountains" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.mountainResults} query='mountains' />
						} />
						<Route exact path="/dogs" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.dogResults} query='dogs' />
						} />
						<Route exact path="/sunset" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.sunsetResults} query='sunset' />
						} />



						<Route path="/search/:topic" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.results} query={this.state.searchTerm} />
						} />



						<Route component={NotFound} />
					</Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
