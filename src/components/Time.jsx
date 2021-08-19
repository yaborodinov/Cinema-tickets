import React from 'react'

import { StyledTime } from "../styled/components/Time"


const Time = ({ time, onShow }) => <StyledTime onClick={onShow}  background="#cbafff">{time}</StyledTime>;

export default Time
