import React from 'react';
import styled from 'styled-components';

const StyledButton = styled("button")`
  border:none;
  padding: 10px 15px;
  font-size: 18px;
  cursor:pointer;
  margin-top: ${(props)=>props.mt || "0"};
  &:focus{
    outline:none;
  };
  align-self:${props=>props.align || "stretch"};
`

function CreatedButton(props) {
  console.log(props)
  return (
    <StyledButton {...props} />
      
    
  )
}

export default CreatedButton;
