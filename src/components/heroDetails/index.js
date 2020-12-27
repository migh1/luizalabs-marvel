/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import { privateKey, publicKey } from '../../contants';
import useRequest from '../../hooks/useRequest';

import HeroDescription from '../heroDescription';
import HeroImage from '../heroImage';

import './index.css';

const HeroDetails = ({ id }) => {
  const { _get, loading, response, error } = useRequest();
  const [hero, setHero] = useState({});

  const fetchHeroDetails = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    _get(`/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  };

  useEffect(() => {
    if (id) {
      fetchHeroDetails();
    }
  }, []);

  useEffect(() => {
    if (response) {
      setHero(response.data.results[0]);
    }
  }, [response]);

  return (
    <div className="hero-container">
      <HeroDescription hero={hero} />
      <HeroImage thumbnail={hero.thumbnail} />
    </div>
  );
};

export default HeroDetails;
