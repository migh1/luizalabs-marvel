import React from 'react';

import HeroHeader from '../../components/heroHeader';
import HeroDetails from '../../components/heroDetails';
import HeroReleases from '../../components/heroReleases';

import './index.css';

const Hero = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div className="hero-page">
      <HeroHeader />
      <HeroDetails id={id} />
      <HeroReleases />
    </div>
  );
};

export default Hero;
