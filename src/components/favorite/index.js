import React from 'react';
import favoriteOutlinedIcon from '../../assets/icones/heart/Path Copy 2.png';
import favoriteFilledIcon from '../../assets/icones/heart/Path.png';

import './index.css';

const Favorite = ({ active }) => {
  return active ? (
    <img className="favorite-icon" src={favoriteFilledIcon} alt="Botão de coração preenchido" />
  ) : (
    <img
      className="favorite-outlined-icon"
      src={favoriteOutlinedIcon}
      alt="Botão de coração não preenchido"
    />
  );
};

export default Favorite;
