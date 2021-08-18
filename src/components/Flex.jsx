import React from 'react';
import styled,{css} from 'styled-components';


const StyledFlex = styled("div")`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  ${(props) => props.underline && css`
    border-bottom: 1px solid #fff;
  `}
`;

function Flex(props) {
  return(
    <StyledFlex {...props} />
  )
}

export default Flex
