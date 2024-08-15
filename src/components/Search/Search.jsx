import React from "react";
import "./search.css"

function Search ({setUserInput, handleSearch}) {

    const handleEnter = (e) => {
        e.key === "Enter" && handleSearch()
    }

    return (
        <input className="search__bar" onKeyDown={handleEnter} onChange={(e)=>setUserInput(e.target.value)} type="text" placeholder="Search City..." />
        
    )
}

export default Search;