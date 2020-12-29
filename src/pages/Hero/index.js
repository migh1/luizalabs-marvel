import React, { useEffect, useState } from 'react';

import HeroHeader from '../../components/heroHeader';
import HeroDetails from '../../components/heroDetails';
import HeroReleases from '../../components/heroReleases';

import './index.css';
import Footer from '../../components/footer';
import { heroContext } from '../../utils/context';

const Hero = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const [context, setContext] = useState({ heroId: id, heroName: '', history });

  return (
    <div className="hero-page">
      <heroContext.Provider value={[context, setContext]}>
        <HeroHeader />
        <HeroDetails id={context.heroId} />
        <HeroReleases id={context.heroId} />
      </heroContext.Provider>
      <Footer />
    </div>
  );
};

export default Hero;
