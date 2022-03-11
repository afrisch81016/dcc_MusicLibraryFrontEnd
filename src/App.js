import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";

// {
//   "id": 8,
//   "title": "Everlong-Acoustic Version",
//   "artist": "Foo Fighters",
//   "album": "Greatest Hits",
//   "release_date": "1997-08-18",
//   "genre": "Rock"
// },

function App() {

const [songs,setSongs] = useState([{id:'',title:'',artist:'',album:'',release_date:'',genre:''}])





  return (
    <div>
      
      <NavBar />
    </div>
  );
}

export default App;
