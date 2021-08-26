import React from 'react';

import StyledPoster from '../styled/components/StyledPoster'

const Poster = ({ item, handPOsterleClick }) => {
  return (
    <StyledPoster sm={12} md={3} onClick={handPOsterleClick}>
      <img src={item.poster} alt={item.name} />
      <h2 className="mt-4">{item.name}</h2>
    </StyledPoster>
  );
}

export default Poster;
