import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
 
import { Time, Poster, Loader } from './index';
import {
  StyledSubTitle,
  StyledCalendarCol,
  CalendarWrapper,
  FlexUl,
} from '../styled/components/StyledBody';

import { fetchData, actionSetCurrentDay, actionCurrentFilm } from '../redux/ducks/data';
import { StyledAlert } from '../styled/components/StyledAlert';

const Body = ({ onShow, onSelectCurrentTime }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const data = useSelector((state) => state.data);
  const [currentFilm, setCurrentFilm] = useState(null);
  const [currentFilmSessions, setCurrentFilmSessions] = useState([]);
  const [currentDate, setCurrentDate] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchCurrentFilm = (film, index) => {
    setCurrentFilm({
      index: index,
      name: film.name,
    });
    setCurrentFilmSessions(film.sessions);
    setIsClicked(true);
    dispatch(actionCurrentFilm(film.name));
  };

  return (
    <Row className="align-items-center flex-wrap" xs={1}>
      <Col>
        <Row>
          <Col>
            <CalendarWrapper>
              <StyledSubTitle>Calendar</StyledSubTitle>
              <Row className="mb-1 border-bottom border-white">
                {weekDays.map((day, index) => (
                  <StyledCalendarCol key={`${day}_${index}`}>
                    {day}
                  </StyledCalendarCol>
                ))}
              </Row>
              <Row>
                {loading ? <Loader /> : ''}
                {(data.dates || currentDate).map((element, ind) => (
                  <StyledCalendarCol
                    className={currentDate === element.date ? 'active' : ''}
                    border='true'
                    onClick={() => {
                      setCurrentDate(element.date);
                      setCurrentFilm(null);
                      dispatch(actionSetCurrentDay(element.date));
                    }}
                    key={`${element}_${ind}`}
                  >
                    {element.date}
                  </StyledCalendarCol>
                ))}
              </Row>
            </CalendarWrapper>
          </Col>
          <Col>
            <StyledSubTitle
              className={classNames({
                disabled: !isClicked,
              })}
            >
              Sessions
            </StyledSubTitle>
            <FlexUl className='d-flex mx-auto'>
              {currentFilm
                ? currentFilmSessions.map((item, index) => {
                    const time = Object.keys(item);
                    const [activeSit] = Object.entries(item);
                    return (
                      <Link to='/popup' key={`${item}_${index}`}>
                        <Time
                          activeSit={activeSit}
                          onSelectCurrentTime={onSelectCurrentTime}
                          margin='10px'
                          time={time}
                          onShow={onShow}
                        />
                      </Link>
                    );
                  })
                : ''}
            </FlexUl>
          </Col>
        </Row>
      </Col>
      <Col className="flex-column flex-md-row">
        <StyledAlert
          variant="danger"
          className={classNames({
            disabled: !data.dates[currentDate - 1].films[0]?.name,
            transparent: currentFilm,
          })}
        >
          Select the movie to get available sessions
        </StyledAlert>
        <Row className="justify-content-around">
          {data.dates[currentDate - 1].films.map((poster, index) => (
            <Poster
              active={currentFilm?.index === index ? 'active' : ''}
              item={poster}
              onPosterClick={() => dispatchCurrentFilm(poster, index)}
              key={`${poster}__${index}`}
            />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

Body.propTypes = {
  dates: PropTypes.array.isRequired,
  onShow: PropTypes.func.isRequired,
  onSelectCurrentTime: PropTypes.func.isRequired,
};

Body.defaultProps = {
  dates: []
};

export default Body;
