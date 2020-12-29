import React, { useEffect, useState } from 'react';
import { localStorageKey } from '../../contants';
import Favorite from '../favorite';
import Book from '../book';
import Movie from '../movie';
import Rating from '../rating';

import './index.css';

const HeroDescription = ({ hero }) => {
  const [favoritesHeroes, setFavoritesHeroes] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setFavoritesHeroes(favorites);
  }, []);

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
    <div className="hero-description-container">
      <div className="hero-title-container">
        <div>
          <span className="hero-title">{hero.name}</span>
        </div>
        <div>
          <Favorite
            active={favoritesHeroes.includes(hero.id)}
            onClick={(toggle) => onFavoriteHandler(hero.id, toggle)}
            size="x2"
          />
        </div>
      </div>

      <div className="hero-description">
        <span>{hero.description}</span>
      </div>

      <div className="hero-add-info">
        <div className="hero-comics">
          <span>Quadrinhos</span>
          <br />
          <Book />
          <span>{hero.comics?.available}</span>
        </div>

        <div className="hero-movies">
          <span>Filmes</span>
          <br />
          <Movie />
          <span>{hero.series?.available}</span>
        </div>
      </div>

      <div className="hero-rating">
        <span>Rating: </span>
        <span>
          <Rating stars={4} />
        </span>
      </div>

      <div className="hero-last-comic">
        <span>Último quadrinho: </span>
        <span>13 fev. 2020</span>
      </div>
    </div>
  );
};

export default HeroDescription;
