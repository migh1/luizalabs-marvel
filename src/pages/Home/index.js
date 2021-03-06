import React, { useState } from 'react';
import Header from '../../components/header';
import SearchBar from '../../components/searchBar';
import HeroesContainer from '../../components/heroesContainer';
import Footer from '../../components/footer';
import debounce from '../../utils/debounce';
import SearchContext from '../../utils/context';

const Home = () => {
  const [context, setContext] = useState({
    searchValue: '',
    total: 0,
    orderBy: 'name',
    onlyFavorites: false,
    page: 1,
    offset: 0,
  });

  const onChangeHandler = debounce((value) => {
    setContext({ ...context, searchValue: value, offset: 0, page: 1 });
  }, 500);

  return (
    <>
      <Header />
      <SearchContext.Provider value={[context, setContext]}>
        <SearchBar className="searchBar-container" onChange={onChangeHandler} />
        <HeroesContainer />
      </SearchContext.Provider>
      <Footer />
    </>
  );
};

export default Home;
