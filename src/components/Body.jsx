import React,{useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
 
import { Time, Poster } from './index';
import {
  StyledCalendarTitle,
  StyledCol,
  CalendarWrapper,
  FlexUl,
} from '../styled/components/Body';
import StyledButton from '../styled/components/StyledButton';

import { actionSetCurrentDay, actionCurrentFilm, getData } from '../redux/store';

const Body = ({ onShow, handlerSelectCurrentTime }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentFilms, setCurrentFilms] = useState([]);
  const [currentFilm, setCurrentFilm] = useState(null);
  const [currentFilmSessions, setCurrentFilmSessions] = useState([]);
  const [currentDate, setCurrentDate] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-grid gap-2">
        <StyledButton
          variant="primary"
          size="lg"
          className="mt-4 mb-4"
          onClick={() => dispatch(getData())}
        >
          To tickets
        </StyledButton>
      </div>

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
                  {(data.dates || currentDate).map((el, ind) => (
                    <StyledCol
                      className={currentDate === el.date ? "active" : ""}
                      border="true"
                      onClick={() => {
                        setCurrentFilms(el.films);
                        setCurrentDate(el.date);
                        dispatch(actionSetCurrentDay(el.date));
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
                active={currentFilm?.index === index ? "active" : ""}
                item={el}
                handlerPosterleClick={() => {
                  setCurrentFilm({
                    index: index,
                    name: el.name,
                  });
                  setCurrentFilmSessions(el.sessions);
                  setIsClicked(true);
                  dispatch(actionCurrentFilm(el.name));
                }}
                key={`${el}__${index}`}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

Body.propTypes = {
  dates: PropTypes.array.isRequired,
  onShow: PropTypes.func.isRequired,
  handlerSelectCurrentTime: PropTypes.func.isRequired
};

Body.defaultProps = {
  dates: []
};

export default Body;
