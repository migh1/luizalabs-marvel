import React from 'react';

const HeroDetails = ({
  match: {
    params: { id },
  },
}) => {
  return <>{id}</>;
};

export default HeroDetails;
