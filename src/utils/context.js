import React from 'react';

const searchContext = React.createContext({
  searchValue: '',
  total: 0,
  orderBy: 'name',
  onlyFavorites: false,
});

export const heroContext = React.createContext({ heroId: null, heroName: '' });

export default searchContext;
