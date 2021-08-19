import styled from "styled-components";

import { Button } from "react-bootstrap";





export const StyledButton = styled(Button)`
  border-color:${props => props.theme.colors.violet};
  color:${props => props.theme.colors.violet};
  background-color: ${props => props.theme.colors.primary};
  &:hover{
    background-color: ${props => props.theme.colors.violet};
    color:${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.violet};
  }
  `