/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { publicKey, privateKey } from '../../contants';
import useRequest from '../../hooks/useRequest';
import Favorite from '../favorite';

import './index.css';

const HeroesList = () => {
  const [heroes, setHeroes] = useState([]);
  const { _get, loading, response, error } = useRequest();

  const fetchHeroes = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    _get(`/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  useEffect(() => {
    if (response) {
      setHeroes(response.data.results);
    }
  }, [response]);

  return (
    <div className="hero-list">
      {heroes.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/hero/${hero.id}`}>
              <img
                className="hero-thumbnail"
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
            </Link>
            <br />
            <span className="hero-description">
              <span className="hero-name">{hero.name}</span>
              <Favorite active={false} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HeroesList;
