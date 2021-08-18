import React from 'react';
import styled, {css} from "styled-components";
import {Row} from "react-bootstrap"


const StyledCalendarTitle = styled("h3")`
  color: #fff;
  margin: 20px 0;
  text-align: center;
  font-size: 18px;
`
const StyledCol = styled("div")`
  ${(props) =>
    props.fixWidth &&
    css`
      max-width: 51.5px;
      min-width: 51.5px;
      margin: 5px 0;
      text-align: center;
      color: #fff;
      &:hover {
        cursor: pointer;
        color: #feef5c;
      }
    `}
`;



function Calendar() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dates = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <>
      <StyledCalendarTitle>Calendar</StyledCalendarTitle>
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
