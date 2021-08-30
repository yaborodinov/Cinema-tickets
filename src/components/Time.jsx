import React from 'react';
import PropTypes from 'prop-types';

import { StyledTime } from '../styled/components/Time';

const Time = ({ time, onShow, activeSit, handlerSelectCurrentTime }) =><StyledTime
        onClick={() => {
          handlerSelectCurrentTime(activeSit);
          onShow();
        }}
      >
      {time}
    </StyledTime>

Time.propTypes = {
  time: PropTypes.array.isRequired,
  onShow: PropTypes.func.isRequired,
  activeSit: PropTypes.array.isRequired,
  handlerSelectCurrentTime: PropTypes.func.isRequired,
};

export default Time;
