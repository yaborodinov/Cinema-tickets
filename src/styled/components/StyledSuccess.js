import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledSuccess = styled(Modal.Dialog)`
  width: 100%;
  border-radius: 10px;
  @media (min-width: ${props => props.theme.media.medium}) {
    min-width: 400px;
    max-width: 400px;
  };
  svg {
  min-width: 20px;
  };
  .btn-close {
    display: none;
  };
  .modal-body {
    font-size: ${props => props.theme.fontSize.medium};
  };
  .opacity-80 {
    opacity: 0.4;
  };
`;
