import React from 'react';
import Header from '../../components/header';
import SearchBar from '../../components/searchBar';
import HeroesContainer from '../../components/heroesContainer';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar className="searchBar-container" />
      <HeroesContainer />
      <Footer />
    </>
  );
};

export default Home;
