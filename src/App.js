import React from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import './App.css';




const AppWrapper = styled.div`
width:100 %;
min-height:100vh;
padding:2rem;
background:#ccc;
`;

const Title = styled.h1 `
  color: ${props=>(props.red?"red":"blue")}
`;


function App() {
  return (
    < AppWrapper>
      < Title red > Booking Tickets </Title>
      < Button variant="primary"> Primary </Button>
    </AppWrapper>
  );
}

export default App;
