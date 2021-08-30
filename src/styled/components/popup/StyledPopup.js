import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export const StyledHeader = styled(Modal.Header)`
  position: relative;
`

export const StyledCloseButton = styled('button')`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  background: none;
  width: 20px;
  height: 20px;
  &:before{
    content: "";
    display: block;
    width: 26px;
    height: 2px;
    background-color: ${props=>props.theme.colors.violet};
    position: absolute;
    transform: rotate(45deg) translateX(-3px) translateY(2px);
  };
  &:after{
    content: "";
    display: block;
    width: 26px;
    height: 2px; 
    background-color: ${props=>props.theme.colors.violet};
    position: absolute;
    transform: rotate(-45deg) translateX(-2px) translateY(-3px);
  };
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
  &.disabled {
    background-color: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.secondary};
    pointer-events: none;
  };
  &.active{
    background-color: ${props => props.theme.colors.violet};
    color: ${props => props.theme.colors.primary};
  }
`