import React from 'react';
import Favorite from '../favorite';
import Book from '../book';
import Movie from '../movie';
import Rating from '../rating';

import './index.css';

const HeroDescription = ({ hero }) => {
  return (
    <div className="hero-description-container">
      <div className="hero-title-container">
        <div>
          <span className="hero-title">{hero.name}</span>
        </div>
        <div>
          <Favorite size="x2" />
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
          <span>3.0000</span>
        </div>

        <div className="hero-movies">
          <span>Filmes</span>
          <br />
          <Movie />
          <span>40</span>
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
