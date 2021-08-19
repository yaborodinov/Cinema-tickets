import React from 'react';
import {Row} from "react-bootstrap"

import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
} from "../styled/components/Calendar";




function Calendar(props) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dates = [5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16];
  return (
    <CalendarWrapper>
      <StyledCalendarTitle {...props}>Calendar</StyledCalendarTitle>

      <Row xs={7}>
        {weekDays.map((el, index) => (
          <StyledCol  key={`${el}_${index}`}>{el}</StyledCol>
        ))}
      </Row>
      <Row xs={6}>
        {dates.map((el, ind) => (
          <StyledCol key={`${el}_${ind}`}>{el}</StyledCol>
        ))}
      </Row>
    </CalendarWrapper>
  );
}

export default Calendar
