import React from 'react';
import filledStar from '../../assets/review/Path@2x.png';
import outlinedStar from '../../assets/review/Path Copy 6@2x.png';

import './index.css';

const Rating = ({ stars }) => {
  const rating = [];
  for (let i = 0; i < stars; i++) {
    rating.push(<img key={i + 1} src={filledStar} alt="Ícone de estrela preenchido" />);
  }

  for (let i = 0; i < 5 - stars; i++) {
    rating.push(<img key={6 - i} src={outlinedStar} alt="Ícone de estrela não preenchido" />);
  }

  return rating.map((star) => {
    return star;
  });
};

export default Rating;
