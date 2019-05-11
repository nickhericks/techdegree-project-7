import React, { Component } from "react";
// Need to import withRouter to access history
import { withRouter } from 'react-router-dom';


class Search extends Component {
	
	// When form is submitted
	handleSubmit = (e) => {
		// Prevent default form submission
		e.preventDefault();
		let searchQuery = this.search.value;
		// Pass search query to performSearch function in App.js
		this.props.newSearch(searchQuery);
		// Reset input field value
		e.currentTarget.reset();

		let path = `/search/${searchQuery}`;
		// Push new entry onto history stack (list of previously visited URLs)
		// which allows us to programmatically change the URL
		this.props.history.push(path);
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<input 
					type="search" 
					name="Search" 
					placeholder="Search" 
					ref={ (input) => this.search = input }
					required 
					autoFocus
				/>
				<button type="submit" className="search-button">
					<svg
						fill="#fff"
						height="24"
						viewBox="0 0 23 23"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</button>
			</form>
		);
	}
};

// Use withRouter
export default withRouter (Search);