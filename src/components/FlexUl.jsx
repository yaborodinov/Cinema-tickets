import React from 'react'


import styled, { css } from "styled-components";

const StyledFlexUl = styled("ul")`
  display: flex;
  flex-wrap:wrap;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  ${(props) =>
    props.underline &&
    css`
      border-bottom: 1px solid #fff;
    `}
`;
function FlexUl(props) {
  return (
    <StyledFlexUl {...props}/>
      
  )
}

export default FlexUl
