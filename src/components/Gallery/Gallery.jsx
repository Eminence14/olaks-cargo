import React from "react";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="flex gallery-container">
      <div className="flexCol left">
        <h2>fleet gallery</h2>
        <p>
          Dynamically mesh progressive platforms vis-a-vis state of the art
          growth strategies. Appropriately redefine prospective results for
          optimal supply chains
        </p>
        <button className="button">view all</button>
      </div>
      <div className="right">
        <div className="gallery-images">
          <img src="./images/gall_02.jpg" alt="" />
          <img src="./images/gall_03.jpg" alt="" />
          <img src="./images/gall_04.jpg" alt="" />
          <img src="./images/gall_07.jpg" alt="" />
          <img src="./images/gall_08.jpg" alt="" />
          <img src="./images/gall_09.jpg" alt="" />
          <img className="gallery-images-duplicate" src="./images/gall_02.jpg" alt="" />
          <img className="gallery-images-duplicate" src="./images/gall_03.jpg" alt="" />
          <img className="gallery-images-duplicate" src="./images/gall_04.jpg" alt="" />
          <img className="gallery-images-duplicate" src="./images/gall_07.jpg" alt="" />
          <img className="gallery-images-duplicate" src="./images/gall_08.jpg" alt="" />
          <img className="gallery-images-duplicate" src="./images/gall_09.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
