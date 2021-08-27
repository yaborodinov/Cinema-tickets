import React,{useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
 
import { Time, Poster } from './index';

import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
  FlexUl,
} from '../styled/components/Body';

const Body = ({ dates, onShow, handlerSelectCurrentTime }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentFilms, setCurrentFilms] = useState([]);
  const [currentFilm, setCurrentFilm] = useState(null)
  const [currentFilmSessions, setCurrentFilmSessions] = useState([]);
  const [currentDate, setCurrentDate] = useState(1);
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Row className="align-items-center flex-wrap" xs={1}>
      <Col>
        <Row>
          <Col>
            <CalendarWrapper>
              <StyledCalendarTitle>Calendar</StyledCalendarTitle>
              <Row className="mb-1 border-bottom border-white">
                {weekDays.map((el, index) => (
                  <StyledCol key={`${el}_${index}`}>{el}</StyledCol>
                ))}
              </Row>
              <Row>
                {(dates || currentDate).map((el, ind) => (
                  <StyledCol
                    className={currentDate === el.date ? "active" : ""}
                    border="true"
                    onClick={() => {
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
                  <Link to="/popup" key={`${item}_${index}`}>
                    <Time
                      activeSit={activeSit}
                      handlerSelectCurrentTime={handlerSelectCurrentTime}
                      margin="10px"
                      time={time}
                      onShow={onShow}
                    />
                  </Link>
                );
              })}
            </FlexUl>
          </Col>
        </Row>
      </Col>
      <Col className="flex-column flex-md-row">
        <Row className="justify-content-around">
          {currentFilms.map((el, index) => (
            <Poster
              active={currentFilm === index ? "active" : ""}
              item={el}
              handPosterleClick={() => {
                setCurrentFilm(index);
                setCurrentFilmSessions(el.sessions);
                setIsClicked(true);
              }}
              key={`${el}__${index}`}
            />
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Body;