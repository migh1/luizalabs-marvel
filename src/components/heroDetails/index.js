/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import md5 from 'md5';
import { privateKey, publicKey } from '../../contants';
import useRequest from '../../hooks/useRequest';
import { heroContext } from '../../utils/context';

import HeroDescription from '../heroDescription';
import HeroImage from '../heroImage';

import './index.css';

const HeroDetails = ({ id }) => {
  const { _get, loading, response, error } = useRequest();
  const [hero, setHero] = useState({});
  const [context, setContext] = useContext(heroContext);

  const fetchHeroDetails = (heroName) => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const urlQueryString = `ts=${ts}&apikey=${publicKey}&hash=${hash}&orderBy=name&limit=1`;

    if (heroName) {
      _get(`/v1/public/characters?${urlQueryString}&nameStartsWith=${heroName}`);
    } else {
      _get(`/v1/public/characters/${id}?${urlQueryString}`);
    }
  };

  useEffect(() => {
    if (id || context.heroName) {
      fetchHeroDetails(context.heroName);
    }
  }, [context.heroName]);

  useEffect(() => {
    if (response) {
      const heroId = String(response.data.results[0].id);

      if (heroId !== String(hero.id)) {
        setHero(response.data.results[0]);
        setContext({ ...context, heroId });
        context.history.push(`/hero/${heroId}`);

        const { styleSheets } = document;

        for (const sheet of styleSheets) {
          if (sheet.rules.length) {
            for (const rule of sheet.cssRules) {
              if (rule.selectorText === '.hero-container::after') {
                rule.style['content'] = `'${response.data.results[0].name}'`;
              }
            }
          }
        }
      }
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
