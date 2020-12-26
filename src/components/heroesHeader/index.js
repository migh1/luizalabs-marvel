import React from 'react';

import './index.css';

const HeroesHeader = () => {
  return (
    <div className="heroesHeader-container">
      <div>
        <span>Encontrado 20 heróis</span>
      </div>
      <div>
        <span>Ordernar por nome - A/Z</span>
        <span>Somente favoritos</span>
      </div>
    </div>
  );
};

export default HeroesHeader;
