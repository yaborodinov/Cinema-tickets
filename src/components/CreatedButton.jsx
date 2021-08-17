import React from 'react';
import styled, { css, keyframes } from 'styled-components';



const rotateAnimation = keyframes`
  0%{
    transform:rotateZ(0deg);
  };
  100%{
    transform : rotateZ(360deg)
  };
`;

const StyledButton = styled("button").attrs(props => ({
  outline: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  margin-top: ${(props) => props.mt || "0"};
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 2s infinite linear;
  };
  align-self: ${(props) => props.align || "stretch"};
  border-radius: 5px;

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "#494646"};
    `};

  ${(props) =>
    props.outline &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;


const LargeStyledButton = styled(StyledButton)`
    ${props => props.large && css`
      font-size:32px;
    `}
    
`;

function CreatedButton(props) {
  console.log(props)
  return <LargeStyledButton {...props} />;
}

export default CreatedButton;
