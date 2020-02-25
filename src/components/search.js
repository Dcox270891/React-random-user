import React from 'react';

function SearchBar ({search, handleInputChange}) {
  return(<>
    <h2>Search here..</h2>
    <input type="text" placeholder="Search for..."  value={search}  onChange={handleInputChange}/>
    </>);
}

export default SearchBar;