import React from 'react';

import './index.css';

const SearchBar = ({ className }) => {
  return (
    <div className={className}>
      <input className="searchBar" type="search" placeholder="Procure por heróis" />
    </div>
  );
};

export default SearchBar;
