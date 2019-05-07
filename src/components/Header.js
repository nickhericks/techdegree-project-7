import React from 'react';

import Search from './Search';
import Nav from './Nav';




const Header = ({ newSearch }) => {

	return (
		<div>
			{/* <h1>React Gallery App</h1> */}
		
			<Search 
				newSearch={newSearch} 
			/>
			
			<Nav />
		
		</div>
	)
};



export default Header;