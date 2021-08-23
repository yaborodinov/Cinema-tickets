import styled, { css } from 'styled-components';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export const StyledHeader = styled(Modal.Header)`
  .btn-close{
    position: absolute;
    right: 12px;
    margin: 0;
    &:focus{
      box-shadow: none;
    }
  }
`

export const StyledButton = styled(Button)`
  border-color: ${props => props.theme.colors.violet};
  color: ${props => props.theme.colors.violet};
  background-color: ${props => props.theme.colors.primary};
  transition: ${props=>props.theme.transition.transition};
  &:hover{
    background-color: ${props => props.theme.colors.violet};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.violet};
  };
  `

export const StyledSit = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width:30px;
  height: 30px;
  border: 1px solid ${props=>props.theme.colors.violet};
  border-radius: 0 0 10px 10px;
  color: ${props => props.theme.colors.secondary};
  transition: ${props=>props.theme.transition.transition};
  &:hover{
    cursor: pointer;
    background-color: ${props => props.theme.colors.violet};
    color: ${props => props.theme.colors.primary};
  };
  &.active{
    background-color: ${props => props.theme.colors.violet};
    color: ${props => props.theme.colors.primary};
  }
  
  ${props => props.disabled && css`
    background-color: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.primary};
    &:hover{
      cursor: default;
    };
  `};
`