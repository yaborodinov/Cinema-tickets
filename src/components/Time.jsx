import React from 'react';

import { StyledTime } from '../styled/components/Time';

const Time = ({ time, onShow, activeSit, handlerSelectCurrentTime }) => <StyledTime
      onClick={() => {
        handlerSelectCurrentTime(activeSit);
        onShow();
      }}
      background="#cbafff"
    >
      {time}
    </StyledTime>

export default Time;
