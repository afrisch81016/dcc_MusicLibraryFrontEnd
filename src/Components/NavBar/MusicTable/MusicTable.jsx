import React, { useState } from "react";


const DisplayMusicTable = (props) => {

const [searchTerm, setSearchTerm] = useState('');

    return(
        <div>
        <div classname = 'musictable'>
            <label>filter songs</label>
            <input type="text" placeholder="Search...(ex Rock)" onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release date</th>
                    <th>genre</th>
                </tr>
            </thead>
        <tbody>
        {props.songData.filter((song) => {
            if (searchTerm === ""){
                return song;
            }
            else if(song.title.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLowerCase()) || song.release_date.toLowerCase().includes(searchTerm.toLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLowerCase())){
                return song;
            }
        }).map((song, index) => {
            return (
            <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
            </tr>
            )
        })}
        </tbody>
        </table>
        </div>
            )
        }
    

export default DisplayMusicTable;