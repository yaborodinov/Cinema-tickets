import React from 'react';
import PropTypes from 'prop-types';

import StyledPoster from '../styled/components/StyledPoster';

const Poster = ({ item, handlerPosterleClick, active }) => {
  return (
    <StyledPoster
      className={active}
      sm={12}
      md={3}
      onClick={handlerPosterleClick}
    >
      <img src={item.poster} alt={item.name} />
      <h2 className="mt-3 h3">{item.name}</h2>
    </StyledPoster>
  );
};

Poster.propTypes = {
  item : PropTypes.object.isRequired
}

export default Poster;
