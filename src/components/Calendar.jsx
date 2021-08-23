import React,{useState} from "react";
import { Row, Col } from "react-bootstrap";

import { Time, FlexUl } from "./index";

import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
} from "../styled/components/Calendar";

function Calendar({ dates, onShow, handlerSelectCurrentTime }) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState([]);
  return (
    <Row className="align-items-center">
      <Col>
        <CalendarWrapper>
          <StyledCalendarTitle>Calendar</StyledCalendarTitle>
          <Row className="mb-1 border-bottom border-white">
            {weekDays.map((el, index) => (
              <StyledCol key={`${el}_${index}`}>{el}</StyledCol>
            ))}
          </Row>
          <Row>
            {dates.map((el, ind) => (
              <StyledCol
                border="true"
                onClick={() => {
                  setCurrentDate(el.sessions);
                }}
                key={`${el}_${ind}`}
              >
                {el.date}
              </StyledCol>
            ))}
          </Row>
        </CalendarWrapper>
      </Col>
      <Col>
        <FlexUl className="d-flex mx-sm-auto mx-md-0 mt-sm-4 ps-sm-0 ps-md-4">
          {currentDate.map((item, index) => {
            const time = Object.keys(item);
            const [activeSit] = Object.entries(item);
            return (
              <Time
                activeSit={activeSit}
                handlerSelectCurrentTime={handlerSelectCurrentTime}
                key={`${item}_${index}`}
                margin="10px"
                time={time}
                onShow={onShow}
              />
            );
          })}
        </FlexUl>
      </Col>
    </Row>
  );
}

export default Calendar;
