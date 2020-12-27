/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Logo from '../logo';
import SearchBar from '../searchBar';

import './index.css';

const HeroHeader = () => {
  return (
    <div className="hero-header">
      <Logo />
      <SearchBar className="hero-search" />
    </div>
  );
};

export default HeroHeader;
