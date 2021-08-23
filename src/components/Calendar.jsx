import React from "react";
import { Row } from "react-bootstrap"

import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
} from "../styled/components/Calendar";

function Calendar({ dates }) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <CalendarWrapper>
      <StyledCalendarTitle>Calendar</StyledCalendarTitle>

      <Row  className="mb-1 border-bottom border-white">
        {weekDays.map((el, index) => (
          <StyledCol key={`${el}_${index}`}>{el}</StyledCol>
        ))}
      </Row>
      <Row>
        {dates.map((el, ind) => (
          <StyledCol  key={`${el}_${ind}`}>
            {el.date}
          </StyledCol>
        ))}
      </Row>
    </CalendarWrapper>
  );
}

export default Calendar;
