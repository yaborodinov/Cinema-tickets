import React from 'react';
import {Row} from "react-bootstrap"

import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
  StyledRow,
} from "../styled/components/Calendar";




function Calendar(props) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dates = [5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,1,18,19,20,21,22,23,24,25,26,27,28,29,30];
  return (
    <CalendarWrapper>
      <StyledCalendarTitle {...props}>Calendar</StyledCalendarTitle>

      <StyledRow underline marginBottom="5px">
        {weekDays.map((el, index) => (
          <StyledCol key={`${el}_${index}`}>{el}</StyledCol>
        ))}
      </StyledRow>
      <Row>
        {dates.map((el, ind) => (
          <StyledCol border key={`${el}_${ind}`}>
            {el}
          </StyledCol>
        ))}
      </Row>
    </CalendarWrapper>
  );
}

export default Calendar
