import React, { useState } from "react";

//manage pictures
function App() {
  const [pictures, setPictures] = useState([]);

  return (
    <div>
      <h1>Picture Sharing App</h1>
      <pictureList pictures={pictures} />
      <AddPicture setPictures={setPictures} />
    </div>
  );
}
    

export default App;
