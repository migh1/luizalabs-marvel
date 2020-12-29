/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { publicKey, privateKey } from '../../contants';
import useRequest from '../../hooks/useRequest';
import Favorite from '../favorite';

import './index.css';

const localStorageKey = 'marvel_favorite_heroes';

const HeroesList = () => {
  const [heroes, setHeroes] = useState([]);
  const [favoritesHeroes, setFavoritesHeroes] = useState([]);
  const { _get, loading, response, error } = useRequest();

  const fetchHeroes = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    _get(`/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setFavoritesHeroes(favorites);

    fetchHeroes();
  }, []);

  useEffect(() => {
    if (response) {
      setHeroes(response.data.results);
    }
  }, [response]);

  const onFavoriteHandler = (heroId, toggle) => {
    if (toggle) {
      if (favoritesHeroes.length < 5) {
        const newFavorites = [...favoritesHeroes, heroId];
        localStorage.setItem(localStorageKey, JSON.stringify([...favoritesHeroes, heroId]));
        setFavoritesHeroes(newFavorites);
      }
    } else {
      const newFavorites = favoritesHeroes.filter((id) => id !== heroId);
      localStorage.setItem(localStorageKey, JSON.stringify(newFavorites));
      setFavoritesHeroes(newFavorites);
    }
  };

  return (
    <div className="hero-list">
      {heroes.map((hero) => {
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
                active={favoritesHeroes.includes(hero.id)}
                onClick={(toggle) => onFavoriteHandler(hero.id, toggle)}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HeroesList;
