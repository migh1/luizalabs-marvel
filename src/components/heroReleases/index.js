/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import { privateKey, publicKey } from '../../contants';
import useRequest from '../../hooks/useRequest';

import './index.css';

const NO_IMAGE = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

const HeroReleases = ({ id }) => {
  const { _get, loading, response, error } = useRequest();
  const [releases, setReleases] = useState([]);

  const fetchHeroReleases = () => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    _get(`/v1/public/characters/${id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  };

  useEffect(() => {
    if (id) {
      fetchHeroReleases();
    }
  }, []);

  useEffect(() => {
    if (response) {
      setReleases(response.data.results);
    }
  }, [response]);

  return (
    <div className="hero-releases-container">
      <div>
        <span className="hero-releases-title">Últimos Lançamentos</span>
      </div>
      <div className="hero-releases-comics">
        {releases.map((release) => {
          const imageSrc = release.images.length
            ? `${release.images[0]?.path}.${release.images[0]?.extension}`
            : NO_IMAGE;
          return (
            <div>
              <img src={imageSrc} alt="Foto Quadrinho" />
              <br />
              <span>{release.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroReleases;
