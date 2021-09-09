import React, {useState, useEffect} from 'react';
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
import { actionReserve } from '../../redux/reducers/reducer';


const Popup = (props) => {
  const info = {
    time: props.time[0],
    activeSit: props.time[1] ? Object.values(props.time[1]) : [],
  };
  const [choosenSit, setChoosenSit] = useState(null);
  const [currentPopup, setCurrentPopup] = useState(info);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);

  const handleSelectItem = () => {
    let tempState = state;
    const temp = state.dates.findIndex(e => e.date === state.currentDay);
    const currentFilm = state.dates[temp].films.find((el) => el.name === state.currentFilm);
    const currentFilmIndex = state.dates[temp].films.findIndex((el) => el.name === state.currentFilm);
    const currentSessionIndex = currentFilm.sessions.findIndex((el) => el[info.time]);
    let currentSessionTime = currentFilm.sessions[currentSessionIndex][info.time];

    currentSessionTime[choosenSit + 1] = !currentSessionTime[choosenSit + 1];
    tempState.dates[temp].films[currentFilmIndex].sessions[currentSessionIndex][info.time] = currentSessionTime;

    dispatch(actionReserve(tempState));
  }

  const setLocalPopup = async () => {
    if (info.time) {
      await localStorage.setItem('info', JSON.stringify(info));
    } 
  };
  
  const getLocalPopup = async () => {
    const temp = await localStorage.getItem('info');
    if (JSON.parse(temp)) {
      setCurrentPopup(JSON.parse(temp));
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
          <Link to="/">
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
        <Link to="/">
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
}

export default Popup;
