import React from "react";

import Item from "./Item";
import NoPics from "./NoPics";



const Gallery = ({ pictures }) => {

	console.log(pictures);

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
	}


  return (
    <div className="photo-container">
      <h2>Gallery Results</h2>
      <ul>

				{pics}

      </ul>
    </div>
  );
};

export default Gallery;
