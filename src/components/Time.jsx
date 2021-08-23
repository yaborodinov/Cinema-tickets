import React from "react";

import { StyledTime } from "../styled/components/Time";

function Time({ time, onShow, activeSit, handlerSelectCurrentTime }) {
  return (
    <StyledTime
      onClick={() => {
        handlerSelectCurrentTime(activeSit);
        onShow();
      }}
      background="#cbafff"
    >
      {time}
    </StyledTime>
  );
}
;

export default Time;
