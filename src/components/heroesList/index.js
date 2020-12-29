/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { publicKey, privateKey, localStorageKey } from '../../contants';
import useRequest from '../../hooks/useRequest';
import Favorite from '../favorite';
import searchContext from '../../utils/context';

import './index.css';

const HeroesList = () => {
  const [heroes, setHeroes] = useState([]);
  const [favoritesHeroes, setFavoritesHeroes] = useState([]);
  const { _get, loading, response, error } = useRequest();
  const [context, setContext] = useContext(searchContext);

  const fetchHeroes = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    _get(
      `/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}${
        context.searchValue && `&nameStartsWith=${context.searchValue}`
      }&orderBy=${context.orderBy}`
    );
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setFavoritesHeroes(favorites);
  }, []);

  useEffect(() => {
    fetchHeroes();
  }, [context.searchValue, context.orderBy]);

  useEffect(() => {
    if (response) {
      setHeroes(response.data.results);
      setContext({ ...context, total: response.data.total });
    }
  }, [response]);

  const onFavoriteHandler = (hero, toggle) => {
    if (toggle) {
      if (favoritesHeroes.length < 5) {
        const newFavorites = [...favoritesHeroes, hero];
        localStorage.setItem(localStorageKey, JSON.stringify([...favoritesHeroes, hero]));
        setFavoritesHeroes(newFavorites);
      }
    } else {
      const newFavorites = favoritesHeroes.filter((fhero) => fhero.id !== hero.id);
      localStorage.setItem(localStorageKey, JSON.stringify(newFavorites));
      setFavoritesHeroes(newFavorites);
    }
  };

  return (
    <div className="hero-list">
      {(context.onlyFavorites ? favoritesHeroes : heroes).map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/hero/${hero.id}`}>
              <img
                className="hero-list-thumbnail"
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
            </Link>
            <br />
            <span className="hero-list-description">
              <span className="hero-list-name">{hero.name}</span>
              <Favorite
                active={favoritesHeroes.find((fhero) => fhero.id === hero.id)}
                onClick={(toggle) => onFavoriteHandler(hero, toggle)}
              />
            </span>
          </div>
        );
      })}
      {!heroes.length && context.searchValue !== '' && 'Nenhum herói encontrado...'}
    </div>
  );
};

export default HeroesList;
