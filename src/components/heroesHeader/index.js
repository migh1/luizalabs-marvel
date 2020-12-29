import React, { useContext, useState } from 'react';
import Toggle from '../toggle';
import Favorite from '../favorite';
import nounSuperheroIcon from '../../assets/icones/heroi/noun_Superhero_2227044.png';
import searchContext from '../../utils/context';

import './index.css';

const HeroesHeader = () => {
  const [context, setContext] = useContext(searchContext);
  const [toggleStatus, setToggleStatus] = useState(true);

  const onOrderByHandler = (toggle) => {
    setToggleStatus(toggle);
    setContext({ ...context, orderBy: toggle ? 'name' : '-name' });
  };

  const onlyFavoritesHandler = (toggle) => {
    setContext({ ...context, onlyFavorites: toggle });
  };

  return (
    <div className="heroesHeader-container">
      <div>
        <span className="heroes-header-total">Encontrados {context.total} heróis</span>
      </div>
      <div>
        <span>
          <img
            className="heroes-noun-superhero-icon"
            src={nounSuperheroIcon}
            alt="ícone de herói com capa"
          />
          <span className="heroes-header-text-color">Ordenar por nome - A/Z</span>
          <Toggle active={toggleStatus} onClick={onOrderByHandler} />
        </span>
        <span className="heroes-header-favorite">
          <Favorite
            active={context.onlyFavorites}
            onClick={(toggle) => onlyFavoritesHandler(toggle)}
          />
          <span className="heroes-header-text-color">Somente favoritos</span>
        </span>
      </div>
    </div>
  );
};

export default HeroesHeader;
