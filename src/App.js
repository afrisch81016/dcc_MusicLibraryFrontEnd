import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavBar from "./Components/NavBar/NavBar";
import Songs from "./Components/NavBar/Songs/Songs"
import MusicTable from "./Components/NavBar/MusicTable/MusicTable"
import SearchBar from  "./Components/NavBar/SearchBar/SearchBar"


function App() {

// const [songId, setSongId] = useState([{id:''}])
const [songData,setSongData] = useState([{id:'',title:'',artist:'',album:'',release_date:'',genre:''}])

useEffect(() => {
getAllSongs();
console.log(songData)
},[])

async function getAllSongs(){
let response = await axios.get ('http://127.0.0.1:8000/music/');
setSongData(response.data);
}

async function createSong(newSong){
let response = await axios.post ('http://127.0.0.1:8000/music/',newSong);
console.log(response.data);
await getAllSongs();
}

// async function updateSong(songData, songId){
//   let response = await axios.put('http://127.0.0.1:8000/music/${songId}', songData)
// }


// use .map funtion to filter through songdata
//use .filter to search by genre,artist,etc seperately
//use .include for the search bar functionallity

  return (
    <div>
      <NavBar />
      <SearchBar/>
      <MusicTable songData = {songData}/>
      <Songs createSong={createSong}/>

    </div>
  );
}

export default App;
