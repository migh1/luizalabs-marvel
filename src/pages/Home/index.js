import React from 'react';
import Header from '../../components/header';
import SearchBar from '../../components/searchBar';
import HeroesContainer from '../../components/heroesContainer';

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <HeroesContainer />
    </>
  );
};

export default Home;
