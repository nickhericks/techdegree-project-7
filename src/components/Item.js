import React from "react";


const Item = ({ url }) => {
	
	return (
		
		<li>
			<img src={url} alt="" />

			{/* remove this after API is added in */}
			{url}

		</li>
	)
};

export default Item;
