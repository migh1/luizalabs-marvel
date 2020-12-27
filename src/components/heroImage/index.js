import React from 'react';

import './index.css';

const HeroImage = ({ thumbnail }) => {
  if (!thumbnail) return <></>;

  return (
    <div className="hero-image-container">
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="Imagem do herói" />
    </div>
  );
};

export default HeroImage;
