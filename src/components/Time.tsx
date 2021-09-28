import React from 'react';

import { StyledTime } from '../styled/components/StyledTime';

export interface IOnSelectCurrentTime {
  onSelectCurrentTime: (activeSit: Array<number>) => void
}
interface IPropsType extends IOnSelectCurrentTime{
  time: Array<string>
  activeSit: Array<number>
  onShow: () => void
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
