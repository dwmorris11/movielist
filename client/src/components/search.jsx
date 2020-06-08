import React from 'react';



var Search = ({searchClick,
  handleSearchChange,
  searchText}) => (
  <div className='search'>
    <form>
      <input type='text' name='search' value={searchText} onChange={handleSearchChange}></input>
      <button onClick={searchClick}>Search</button>
    </form>
  </div>
)
export default Search;