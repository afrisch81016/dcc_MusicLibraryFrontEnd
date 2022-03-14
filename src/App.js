import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavBar from "./Components/NavBar/NavBar";
import SongEntry from "./Components/NavBar/Songs/Songs"

function App() {

const [songs,setSongs] = useState([{id:'',title:'',artist:'',album:'',release_date:'',genre:''}])

useEffect(() => {
getAllSongs();
console.log(songs)
},[])

async function getAllSongs(){
let response = await axios.get ('http://127.0.0.1:8000/music/');
setSongs(response.data);
}

async function createSong(newSong){
let response = await axios.put ('http://127.0.0.1:8000/music/',newSong);
console.log(response.data);
await getAllSongs();
}

  return (
    <div>
      <NavBar />
      <SongEntry/>

    </div>
  );
}

export default App;
