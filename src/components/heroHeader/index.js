/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { heroContext } from '../../utils/context';
import debounce from '../../utils/debounce';
import Logo from '../logo';
import SearchBar from '../searchBar';

import './index.css';

const HeroHeader = () => {
  const [context, setContext] = useContext(heroContext);

  const onChangeHandler = debounce((value) => {
    setContext({ ...context, heroName: value });
  }, 500);

  return (
    <div className="hero-header">
      <Logo />
      <SearchBar className="hero-search" onChange={onChangeHandler} />
    </div>
  );
};

export default HeroHeader;
