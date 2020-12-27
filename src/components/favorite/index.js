import React from 'react';
import favoriteOutlinedIcon from '../../assets/icones/heart/Path Copy 2.png';
import favoriteOutlinedIconx2 from '../../assets/icones/heart/Path Copy 2@2x.png';
import favoriteFilledIcon from '../../assets/icones/heart/Path.png';
import favoriteFilledIconx2 from '../../assets/icones/heart/Path@2x.png';

import './index.css';

const favoriteIcon = {
  outlined: {
    x1: favoriteOutlinedIcon,
    x2: favoriteOutlinedIconx2,
  },
  filled: {
    x1: favoriteFilledIcon,
    x2: favoriteFilledIconx2,
  },
};

const Favorite = ({ active, size }) => {
  return active ? (
    <img
      className={`favorite-icon${size || 'x1'}`}
      src={favoriteIcon.filled[size || 'x1']}
      alt="Botão de coração preenchido"
    />
  ) : (
    <img
      className={`favorite-outlined-icon${size || 'x1'}`}
      src={favoriteIcon.outlined[size || 'x1']}
      alt="Botão de coração não preenchido"
    />
  );
};

export default Favorite;
