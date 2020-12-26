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
        <span className="heroes-header-color">
          <img src={nounSuperheroIcon} alt="ícone de herói com capa" />
          Ordernar por nome - A/Z
          <Toggle />
        </span>
        <span className="heroes-header-color">
          <Favorite />
          Somente favoritos
        </span>
      </div>
    </div>
  );
};

export default HeroesHeader;
