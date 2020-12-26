import React from 'react';
import HeroesHeader from '../heroesHeader';
import HeroesList from '../heroesList';

import './index.css';

const HeroesContainer = () => {
  return (
    <div className="heroes-container">
      <HeroesHeader />
      <HeroesList />
    </div>
  );
};

export default HeroesContainer;
