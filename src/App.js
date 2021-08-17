import React from "react";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import './App.css';

import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import CreatedButton from "./components/CreatedButton";



const AppWrapper = styled.div`
width:100 %;
min-height:100vh;
padding:2rem;
background:#ccc;
`;







function App() {
  
  const [color,setColor]= React.useState("blue")
  return (
    < AppWrapper>
      
      <Flex justify="center">
        <Title color={color}> Booking Tickets </Title>
      </Flex>

      <Flex direction="column">
        <Console color={color} />
        < CreatedButton large   color={"blue"} align="flex-end" mt="10px"> Send </CreatedButton>
      </Flex>
      
      < Button variant="primary" > Primary </Button>
    </AppWrapper>
  );
}

export default App;
