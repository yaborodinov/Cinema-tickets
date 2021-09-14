import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

export const StyledAlert = styled(Alert)`
  display: block;
  padding: 8px;
  transition: ${props => props.theme.transition.transition};
  &.disabled {
    display: none;
  };
  &.transparent {
    color: transparent;
    border-color: transparent;
    background-color: transparent;
  };
`;
