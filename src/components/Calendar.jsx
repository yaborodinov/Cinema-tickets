import React from 'react';
import {Row} from "react-bootstrap"

import {StyledCalendarTitle, StyledCol} from "../styled/components/Calendar"




function Calendar(props) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dates = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <>
      <StyledCalendarTitle {...props}>Calendar</StyledCalendarTitle>
      <Row>
        {weekDays.map((el, index) => <StyledCol fixedWidth key={`${el}_${index}`}>{el}</StyledCol>)}
      </Row>
      <Row>
        {dates.map((el, ind) => <StyledCol fixWidth key={`${el}_${ind}`}>{el}</StyledCol>)}
      </Row>

    </>
  );
}

export default Calendar
