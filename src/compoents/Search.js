import React from "react";

const Search = ({searchValue}) => {
    return (
        <input type="text" placeholder="Search Photo ..." className="searchBox" onChange={searchValue}/>
    )
}

export default Search