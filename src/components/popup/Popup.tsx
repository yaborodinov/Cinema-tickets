import React, { useState, useEffect } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledButton,
  StyledSit,
  StyledHeader,
  StyledCloseButton,
} from '../../styled/components/popup/StyledPopup';
import { actionReserve, ISession } from '../../redux/ducks/data';
import { AppStateType } from '../../redux/rootReducer';

interface IProps {
  onHide: () => void;
  onShow: () => void;
  time: string;
  show: boolean;
}

const Popup: React.FC<IProps> = (props) => {
  const info = {
    time: props.time[0],
    activeSit: props.time[1] ? Object.values(props.time[1]) : [],
  };

  let [choosenSit, setChoosenSit] = useState<number>(0);
  const [currentPopup, setCurrentPopup] = useState(info);
  const dispatch = useDispatch();
  const state = useSelector((state: AppStateType) => state.data);
  const link = `/success/${state.currentDay}/${state.currentFilm}/${
    choosenSit + 1
  }/${props.time[0]}`;

  const handleSelectItem = () => {
    let tempState = state;
    const day = state.dates.findIndex((e) => e.date === state.currentDay);
    const currentFilm = state.dates[day].films.find(
      (film) => film.name === state.currentFilm
    );
    const currentFilmIndex = state.dates[day].films.findIndex(
      (film) => film.name === state.currentFilm
    );
    const currentSessionIndex = currentFilm?.sessions.findIndex(
      (session: ISession) => session[info.time]
    );
    if (currentSessionIndex) {
      let currentSessionTime =
        currentFilm?.sessions[currentSessionIndex][info.time];
      if (currentSessionTime) {
        currentSessionTime[choosenSit + 1] =
          !currentSessionTime[choosenSit + 1];
        tempState.dates[day].films[currentFilmIndex].sessions[
          currentSessionIndex
        ][info.time] = currentSessionTime;
        dispatch(actionReserve(tempState));
      }
    }
  };

  const setLocalPopup = () => {
    if (info.time) {
      localStorage.setItem('info', JSON.stringify(info));
    }
  };

  const getLocalPopup = () => {
    const activeSession: string | null = localStorage.getItem('info');
    
    if (activeSession) {
      setCurrentPopup(JSON.parse(activeSession));
    }
  };
  useEffect(() => {
    setLocalPopup();
    getLocalPopup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <StyledHeader className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
          {`Choose your favourite sits at ${currentPopup.time}`}
          <Link to='/'>
            <StyledCloseButton></StyledCloseButton>
          </Link>
        </Modal.Title>
      </StyledHeader>
      <Modal.Body className="d-flex flex-column justify-content-center">
        <img
          className="w-75 mx-auto"
          src="/images/cinemaScreen.png"
          alt="cinema"
        />
        <Row className="w-75 mx-auto" xs={6}>
          {currentPopup.activeSit.map((el, index) => (
            <Col
              className="d-flex justify-content-center mt-2 px-1"
              key={`${el}_${index}`}
            >
              <StyledSit
                onClick={() => setChoosenSit(index)}
                className={classNames({
                  disabled: !el === true,
                  active: choosenSit === index,
                })}
              >
                {index + 1}
              </StyledSit>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Link to={link}>
          <StyledButton
            variant="outline-primary"
            onClick={() => handleSelectItem()}
          >
            Reserve
          </StyledButton>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
