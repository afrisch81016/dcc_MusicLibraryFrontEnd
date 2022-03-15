import { useState } from "react";
import './SearchBar.css'

const SearchBarPrompt = (props) => {
    const [searchTerm,setSearchTerm] = useState("");

    function handleSubmit(element){
        element.preventDefault()
        console.log(searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value ={searchTerm} onChange={(element) => setSearchTerm(element.target.value)} type ='text' placeholder = "Search for a song!!" ></input>
                <button type='submit'>SEARCH</button>
            </form>
        </div>
    )

    

}


export default SearchBarPrompt





// const getFilteredResults = (songvariable,catagories) => {
//     if (!searchPrompt) {
//         return songvariable; 
//     }
//         return songvariable.filter(song => song.title.inculdes(searchPrompt))
        
//     }
    
//     const {songvariable} = Songs;
//     const {catagories} = 'title,artist,album,release_date,genre'
//     const Filteredresults = getFilteredResults(songvariable,catagories)

//     const [searchPrompt,setSearchPrompt] = useState ("")
//     return(
//     <div classname= "searchwindow">
//         <label>Start Search</label>
//         <input type = 'text' onChange={element = setSearchPrompt(element.target.value)}></input>
//         <ul>
//             {Filteredresults.map(value => (
//             <h1 key={value.name}>{value.name}</h1>
//             ))}
//         </ul>
//     </div>
// )


