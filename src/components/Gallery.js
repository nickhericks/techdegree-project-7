import React from "react";

import Item from "./Item";



const Gallery = ({ items }) => {

  return (
    <div className="photo-container">
      <h2>Gallery Results</h2>
      <ul>

				{items.map( (item, index) => (
					<Item 
						key={index.toString()}
						url={item} 
					/>
				))}

				<li className="not-found">
					<h3>No Results Found</h3>
					<p>Your search did not return any results. Please try again.</p>
				</li>

      </ul>
    </div>
  );
};

export default Gallery;
