import React from 'react';
import PropTypes from 'prop-types';

import { StyledTime } from '../styled/components/StyledTime';

interface IPropsType {
  time: Array<string>
  activeSit: Array<number>
  onShow: () => void
  onSelectCurrentTime: (activeSit: Array<number>) => void
}

const Time: React.FC<IPropsType> = ({ time, activeSit, onShow, onSelectCurrentTime }) => (
  <StyledTime
    onClick={() => {
      onSelectCurrentTime(activeSit);
      onShow();
    }}
  >
    {time}
  </StyledTime>
);

Time.propTypes = {
  time: PropTypes.array.isRequired,
  onShow: PropTypes.func.isRequired,
  activeSit: PropTypes.array.isRequired,
  onSelectCurrentTime: PropTypes.func.isRequired,
};

export default Time;
