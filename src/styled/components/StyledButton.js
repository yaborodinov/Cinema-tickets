import styled from 'styled-components';
import { Button } from 'react-bootstrap';

 const StyledButton = styled(Button)`
  font-size: ${props=>props.theme.fontSize.medium};
`

export default StyledButton;
