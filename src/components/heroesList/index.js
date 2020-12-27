/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import useRequest from '../../hooks/useRequest';
import Favorite from '../favorite';

import './index.css';

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

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
            <img
              className="hero-thumbnail"
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
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
