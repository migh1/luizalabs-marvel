import React from 'react';

import './index.css';

const SearchBar = ({ className, onChange }) => {
  return (
    <div className={className}>
      <input
        className="searchBar"
        type="search"
        placeholder="Procure por heróis"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
