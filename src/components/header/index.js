import React from 'react';
import Logo from '../logo';

import './index.css';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <span className="title">EXPLORE O UNIVERSO</span>
      <span className="subtitle">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles
        que você descobrirá em breve!
      </span>
    </div>
  );
};

export default Header;
