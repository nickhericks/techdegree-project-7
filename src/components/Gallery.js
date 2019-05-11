import React from "react";

// Import components
import Item from "./Item";
import NoPics from "./NoPics";


const Gallery = ({ pictures, query }) => {

	let pics;
	if(pictures.length > 0) {
		pics = pictures.map( pic => (
			<Item 
				farm={pic.farm}
				server={pic.server}
				id={pic.id}
				secret={pic.secret}
				key={pic.id}
				title={pic.title}
			/>
		));
	} else {
		pics = <NoPics />
	};

	let searchWord;
	if(query.length > 0) {
		searchWord = `Image results for: "${query}"`
	} else {
		searchWord = '';
	};

  return (
    <div className="photo-container">
      <h2>{searchWord}</h2>
      <ul>{pics}</ul>
    </div>
  );
};

export default Gallery;