import React from 'react';

import './index.css';

const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <input className="searchBar" type="search" placeholder="Procure por heróis" />
    </div>
  );
};

export default SearchBar;
