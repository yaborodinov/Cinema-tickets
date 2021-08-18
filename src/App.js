import React from "react";
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';
import styled,{css} from "styled-components";
import './App.css';

import Title from "./components/Title";
import Flex from "./components/Flex";
import FlexUl from "./components/FlexUl";
import Time from "./components/Time";
import Calendar from "./components/Calendar";



const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background: #6D53C6;
`;



const StyledCol = styled(Col)
`
  ${props => props.width350 && css`
  max-width: 374px;
  min-width: 374px;
  color: #FEEF5C;
  `}
`



function App() {
  const [session, setSession] = React.useState(["10:00", "12:00", "14:00", "16:00","18:00","20:00"])
  return (
    < AppWrapper>
      <Container >
      < Flex underline justify = "center" >
        <Title > Booking Tickets </Title>
      </Flex>

        <Row>
          <StyledCol width350>
            <Calendar />
          </StyledCol>
          <Col> 
            <FlexUl justify="space-between" margin = "20px 0" >
              {
                session.map((item,index) => <Time key={`${item}_${index}`} margin="10px" time={item} />)
              }
              
            </FlexUl>
          </Col>
          
        </Row>

      <Flex direction="column">
      </Flex>
      
    </Container >
    </AppWrapper>
  );
}

export default App;
