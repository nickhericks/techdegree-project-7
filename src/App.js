import React, { Component } from 'react';
import { 
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import './App.css';
import apiKey from './config.js';

import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';



class App extends Component {
  state = {
    loading: true,
		searchTerm: "",
		results: [],
		catResults: [],
		dogResults: [],
		computerResults: []
  };



  componentDidMount() {
		this.performSearch('dogs')
		this.performSearch('cats')
		this.performSearch('computers')
  }

  performSearch = (query = 'dogs') => {
  	fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
				console.log(query);
				if(query === 'dogs') {
					this.setState({
						dogResults: responseData.photos.photo,
						searchTerm: query,
						loading: false
					});
				} else if (query === 'cats') {
							this.setState({
						catResults: responseData.photos.photo,
						searchTerm: query,
						loading: false
					});
				} else if (query === 'computers') {
							this.setState({
						computerResults: responseData.photos.photo,
						searchTerm: query,
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
    console.log(this.state.dogResults);
    return (
      <BrowserRouter>
        <div className="container">
          <Header newSearch={this.performSearch} />

					{/* <Switch>

						<Route exact path="/" render={ () => <Redirect to="/dogs" />} /> 
						
						<Route path="/:topic" render={ () => 
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery
									pictures={this.state.results}
									query={this.state.searchTerm}
								/>
						} />

						<Route component={NoPics} />
					</Switch> */}

					<Switch>

						<Route exact path="/" render={ () =>
							<Gallery pictures={this.state.dogResults} query='dogs' />
						} />
						<Route exact path="/dogs" render={ () =>
							<Gallery pictures={this.state.dogResults} query='dogs' />
						} />
						<Route exact path="/cats" render={ () =>
							<Gallery pictures={this.state.catResults} query='cats' />
						} />
						<Route exact path="/computers" render={ () =>
							<Gallery pictures={this.state.computerResults} query='computers' />
						} />
						<Route exact path="/search/:topic" render={ () =>
							<Gallery pictures={this.state.results} query={this.state.searchTerm} />
						} />



						<Route component={NotFound} />
					</Switch>

{/* 
          {
						(this.state.loading) 
						? <p>Loading...</p>
        		: <Gallery
              	pictures={this.state.results}
              	query={this.state.searchTerm}
            	/>
          } */}


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
