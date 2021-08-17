import React from 'react'
import styled from 'styled-components'





const StyledConsole = styled("textarea")`
  width: 100%;
  height: 70vh;
  font-size: 24px;
  border: none;
  background: #a3a3cf;
  resize:none;
  padding: 15px;
  color: ${({color})=>(color) || "#000"};
  &:focus{
    outline:none;
  }
`;



function Console(props) {
  console.log(props.color)
  return (
    <StyledConsole {...props}/>
  )
}

export default Console
