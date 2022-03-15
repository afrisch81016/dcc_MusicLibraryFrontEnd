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





   

   


