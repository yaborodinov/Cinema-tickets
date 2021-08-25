import React,{useState} from "react";
import { Row, Col, CardGroup, Card } from "react-bootstrap";
import classNames from "classnames";

import { Time } from "./index";

import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
  FlexUl,
} from "../styled/components/Body";

const Body = ({ dates, onShow, handlerSelectCurrentTime }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentFilms, setCurrentFilms] = useState([]);
  const [currentFilmSessions, setCurrentFilmSessions] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);
  const [isClicked, setIsClicked] = useState(false)
  console.log(dates)
  console.log(currentFilms);
  return (
    <Row className="align-items-center flex-wrap" xs={1}>
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
                className={currentDate === el.date ? "active" : ""}
                border="true"
                onClick={() => {
                  console.log(el.films);
                  setCurrentFilms(el.films);
                  setCurrentDate(el.date);
                }}
                key={`${el}_${ind}`}
              >
                {el.date}
              </StyledCol>
            ))}
          </Row>
        </CalendarWrapper>
      </Col>
      <CardGroup>
        {currentFilms.map((el, index) => (
          <Card
            onClick={() => {
              setCurrentFilmSessions(el.sessions);
              setIsClicked(true);
            }}
            key={`${el}__${index}`}
          >
            <Card.Img variant="top" src={el.poster} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Col>
        <StyledCalendarTitle
          className={classNames({
            disabled: !isClicked,
          })}
        >
          Sessions
        </StyledCalendarTitle>
        <FlexUl className="d-flex mx-auto">
          {currentFilmSessions.map((item, index) => {
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

export default Body;
