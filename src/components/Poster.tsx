import React from 'react';

import StyledPoster from '../styled/components/StyledPoster';

interface IPropsType {
  item: {
    'name': string
    'age restrictions': string
    'poster'?: string
    'description'?: string
    'sessions': []
  }
  active: string
  onPosterClick: () => void
};

const Poster: React.FC<IPropsType> = ({ item, active, onPosterClick }) => {
  return (
    <StyledPoster className={active} sm={12} md={3} onClick={onPosterClick}>
      <img src={item.poster} alt={item.name} />
      <h2 className="mt-3 h3">{item.name}</h2>
    </StyledPoster>
  );
};

export default Poster;
