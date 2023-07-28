import React from "react";

//add Picture list and picture details
function pictureList({ pictures }) {
  return (
    <div>
      <h2>Pictures</h2>
      {pictures.map((pictures, index) => (
        <div key ={index}>
          <h3>{picture.title}</h3>
          <p>picture.description</p>
        </div>
      ))}
    </div>
  );
}

export default pictureList