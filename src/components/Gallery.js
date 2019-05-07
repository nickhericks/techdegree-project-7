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
      </ul>

    </div>
  );
};

export default Gallery;
