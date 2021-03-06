import React,{ useState } from 'react';
import './Songs.css'

const Songs = (props) => {

    const[title, setTitle] = useState(''); //  getting data from form holding it for handleSubmit function below
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[release_date, setRelease_date] = useState('');
    const[genre, setGenre] = useState(''); 
    
function handleSubmit(event){
    event.preventDefault();  // prevents page reload
 
    let newSongEntry = {   
        title : title,
        artist : artist,
        album : album,
        release_date : release_date,
        genre : genre,
    };
    console.log(newSongEntry);    // console log to see data if there is an issue
    props.createSong(newSongEntry);
}

// forms take in data while tables display data
    return (
        <form className='content' onSubmit={handleSubmit}> 
            <label className = 'titlecolor'>Title</label>
             <input type='text' onChange ={(event) => setTitle(event.target.value)} value= {title}/>  
            <label className = 'artistcolor'>Artist</label>
            <input type='text' onChange={(event) => setArtist(event.target.value)} value= {artist}/>
            <label className = 'albumcolor'>Album</label>
            <input type='text' onChange={(event) => setAlbum(event.target.value)} value= {album}/>
            <label className = 'releasedatecolor'>Release Date</label>
            <input type='text' onChange={(event) => setRelease_date(event.target.value)} value= {release_date}/>
            <label className = 'genrecolor'>Genre</label>
            <input type='text' onChange={(event) => setGenre(event.target.value)} value= {genre}/>           
            <input type="submit" value="Add Song"></input>
        </form>
    );
    }

export default Songs;