import React from 'react';

import StyledPoster from '../styled/components/StyledPoster'

const Poster = ({ item, handPosterleClick, active }) => {
  return (
    <StyledPoster className={active} sm={12} md={3} onClick={handPosterleClick}>
      <img src={item.poster} alt={item.name} />
      <h2 className="mt-3">{item.name}</h2>
    </StyledPoster>
  );
};

export default Poster;
