import React from 'react';

import HeroHeader from '../../components/heroHeader';
import HeroDetails from '../../components/heroDetails';
import HeroReleases from '../../components/heroReleases';

const Hero = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <>
      <HeroHeader />
      <HeroDetails id={id} />
      <HeroReleases />
    </>
  );
};

export default Hero;
