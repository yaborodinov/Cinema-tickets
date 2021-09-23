import React from 'react';

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


export default Time;
