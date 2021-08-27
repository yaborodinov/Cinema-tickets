import React, {useState, useEffect} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { StyledButton, StyledSit, StyledHeader } from '../../styled/components/popup/StyledPopup';

import ScreenImg from '../../images/cinemaScreen.png';

const Popup = (props) => {
  const info = {
    time: props.time[0],
    activeSit: props.time[1] ? Object.values(props.time[1]) : [] ,
  };
  const [choosenSit, setChoosenSit] = useState(null);
  const [currentPopup, setCurrentPopup] = useState(info);

  useEffect(() => {
    const setLocalPopup = async () => {
      if (info.time) {
        await localStorage.setItem("info", JSON.stringify(info));
      } else {
        return;
      }
    };
    const getLocalPopup = async () => {
      const temp = await localStorage.getItem("info");
      if (JSON.parse(temp)) {
        setCurrentPopup(JSON.parse(temp));
      } else {
        return;
      }
    };
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
      <StyledHeader closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
          {`Choose your favourite sits at ${currentPopup.time}`}
        </Modal.Title>
      </StyledHeader>
      <Modal.Body className="d-flex flex-column justify-content-center">
        <img className="w-75 mx-auto" src={ScreenImg} alt="#" />
        <Row className="w-75 mx-auto" xs={6}>
          {currentPopup.activeSit.map((el, index) => (
            <Col
              className="d-flex justify-content-center mt-2"
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
        <Link to="">
          <StyledButton variant="outline-primary">Reserve</StyledButton>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup
