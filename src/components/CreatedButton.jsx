import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled("button")`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  margin-top: ${(props) => props.mt || "0"};
  &:focus {
    outline: none;
  }
  align-self: ${(props) => props.align || "stretch"};
  border-radius:5px;

  ${(props) =>
    props.primary && css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "#494646"};
    `};

  ${(props) =>
    props.outline && css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${props=>props.color || "white"};
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
