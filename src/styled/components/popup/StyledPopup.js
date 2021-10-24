import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

import { theme } from '../../Global';

export const StyledHeader = styled(Modal.Header)`
  position: relative;
  .modal-title {
    min-width: 85%;
    max-width: 85%;
  }
`;

export const StyledCloseButton = styled('button')`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  background: none;
  width: 20px;
  height: 20px;
  &:before {
    content: '';
    display: block;
    width: 26px;
    height: 2px;
    background-color: ${theme.colors.violet};
    position: absolute;
    transform: rotate(45deg) translateX(-3px) translateY(2px);
  };
  &:after {
    content: '';
    display: block;
    width: 26px;
    height: 2px; 
    background-color: ${theme.colors.violet};
    position: absolute;
    transform: rotate(-45deg) translateX(-2px) translateY(-3px);
  };
`;

export const StyledButton = styled(Button)`
  border-color: ${theme.colors.violet};
  color: ${theme.colors.violet};
  background-color: ${theme.colors.primary};
  transition: ${theme.transition.transition};
  &:hover {
    background-color: ${theme.colors.violet};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.violet};
  };
`;

export const StyledSit = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.colors.violet};
  border-radius: 0 0 10px 10px;
  color: ${theme.colors.secondary};
  transition: ${theme.transition.transition};
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.violet};
    color: ${theme.colors.primary};
  };
  &.disabled {
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.secondary};
    pointer-events: none;
  };
  &.active {
    background-color: ${theme.colors.violet};
    color: ${theme.colors.primary};
  }
`;
