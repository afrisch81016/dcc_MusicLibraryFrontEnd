import React, { useState } from "react";
import './MusicTable.css'

const DisplayMusicTable = (props) => {

const [searchTerm, setSearchTerm] = useState('');

    return(
        <div>
        <div  className = 'musicdatastyle'>
            <label>filter songs</label>
            <input type="text" placeholder="Search...(ex Rock)" onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
        <table>
            <thead>
                <tr className = 'tablerow2'>
                    <th>Title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release date</th>
                    <th>genre</th>
                </tr>
            </thead>
        <tbody className = 'tbodycolor1'>
        {props.songData.filter((song) => {
            if (searchTerm === ""){
                return song;
            }
            else if(song.title.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLowerCase()) || song.release_date.toLowerCase().includes(searchTerm.toLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLowerCase())){
                return song;
            }
        }).map((song, index) => {
            return (
            <tr classname = 'tablerow1' key={index}>
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