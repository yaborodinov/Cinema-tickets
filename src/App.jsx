import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';

import { Time, Title, Flex, FlexUl, Calendar, } from './components';
import  {AppWrapper}  from './styled/AppWrapper';





function App() {
  const session=['10:00', '12:00', '14:00', '16:00','18:00','20:00']
  return (
    < AppWrapper >
      <Container >
        <Flex underline justify = 'center' >
          <Title > Booking Tickets </Title>
        </Flex>
          
        <Row>
          <Col>
            <Calendar/>
          </Col>
          <Col> 
            <FlexUl justify='space-between' margin='20px 0' >
              {
                session.map((item,index) => <Time key={`${item}_${index}`} margin='10px' time={item} />)
              }
            </FlexUl>
          </Col>
        </Row>
      
      </Container >
    </AppWrapper>
  );
}

export default App;
