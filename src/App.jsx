import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import styled,{css} from 'styled-components';

import { Time, Title, Flex, FlexUl, Calendar } from './components';
import  {AppWrapper}  from './styled/AppWrapper';



const StyledCol = styled(Col)
`
  ${props => props.width350 && css`
  max-width: 374px;
  min-width: 374px;
  color: #FEEF5C;
  `}
`



function App() {
  const session=['10:00', '12:00', '14:00', '16:00','18:00','20:00']
  return (
    < AppWrapper >
      <Container >
      < Flex underline justify = 'center' >
        <Title > Booking Tickets </Title>
      </Flex>
        <Row>
          <StyledCol width350='true'>
            <Calendar/>
          </StyledCol>
          <Col> 
            <FlexUl justify='space-between' margin='20px 0' >
              {
                session.map((item,index) => <Time key={`${item}_${index}`} margin='10px' time={item} />)
              }
            </FlexUl>
          </Col>
        </Row>
      <Flex direction='column'>
      </Flex>
    </Container >
    </AppWrapper>
  );
}

export default App;
