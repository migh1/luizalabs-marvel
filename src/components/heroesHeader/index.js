import React from 'react';
import Toggle from '../toggle';
import Favorite from '../favorite';
import nounSuperheroIcon from '../../assets/icones/heroi/noun_Superhero_2227044.png';

import './index.css';

const HeroesHeader = () => {
  return (
    <div className="heroesHeader-container">
      <div>
        <span className="heroes-header-total">Encontrados 20 heróis</span>
      </div>
      <div>
        <span>
          <img
            className="heroes-noun-superhero-icon"
            src={nounSuperheroIcon}
            alt="ícone de herói com capa"
          />
          <span className="heroes-header-text-color">Ordernar por nome - A/Z</span>
          <Toggle />
        </span>
        <span>
          <Favorite />
          <span className="heroes-header-text-color">Somente favoritos</span>
        </span>
      </div>
    </div>
  );
};

export default HeroesHeader;
