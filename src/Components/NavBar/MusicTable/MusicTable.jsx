import React from "react";

const DisplayMusicTable = (props) => {

    return(
        <div classname = 'musictable'>
        {props.songData.map((song, index) => {
        return (
            <div classname = 'musicborder' key = {index}>
                <table>
                    <tbody>
                        <tr>
                            <td>{song.title}</td>
                        </tr>
                        <tr>
                            <td>{song.artist}</td>
                        </tr>
                        <tr>
                            <td>{song.album}</td>
                        </tr>
                        <tr>
                            <td>{song.release_date}</td>
                        </tr>
                        <tr>
                            <td>{song.genre}</td>
                        </tr>
                    </tbody>
                </table>
            </div>            
                
        )
        })}
        </div>
    );
}


export default DisplayMusicTable