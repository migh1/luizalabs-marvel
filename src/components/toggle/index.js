import React from 'react';
import toggleOnIcon from '../../assets/toggle/Group 2@1,5x.png';
import toggleOffIcon from '../../assets/toggle/Group 6.png';

import './index.css';

const Toggle = ({ active, onClick }) => {
  const onClickHandler = (toggle) => {
    onClick(toggle);
  };

  return active ? (
    <img
      onClick={() => onClickHandler(false)}
      className="toggle-icon"
      src={toggleOnIcon}
      alt="Botão toggle ligado"
    />
  ) : (
    <img
      onClick={() => onClickHandler(true)}
      className="toggle-icon"
      src={toggleOffIcon}
      alt="Botão toggle desligado"
    />
  );
};

export default Toggle;
