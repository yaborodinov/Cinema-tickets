import React from "react";

import { StyledTime } from "../styled/components/Time";

function Time({ time, onShow }) {
  return(
    <StyledTime onClick={onShow} background="#cbafff">{ time}</StyledTime>
)}
;

export default Time;
