import React from 'react';
import Search from './Search';
import Nav from './Nav';


const Header = ({ newSearch }) => {
	return (
		<div>
			<Search newSearch={newSearch} />
			<Nav />
		</div>
	)
};

export default Header;