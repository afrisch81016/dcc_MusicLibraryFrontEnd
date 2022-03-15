import React from "react";




const DisplayMusicTable = (props) => {

    return(
        <div classname = 'musictable'>
        {props.songData.map((song, index) => {
        return (
            <div classname = 'musicborder' key = {index}>
                <div><p classname = 'songs.title'>{song.title}</p></div>
                <div><p classname = 'songs.artist'>{song.artist}</p></div>
                <div><p classname = 'songs.album'>{song.album}</p></div>
                <div><p classname = 'songs.release_date'>{song.release_date}</p></div>
                <div><p classname = 'songs.genre'>{song.genre}</p></div>
            </div>
        )
        })}
        </div>
    );
}


export default DisplayMusicTable