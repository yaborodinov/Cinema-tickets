import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
  font-weight: 500;
  border: ${props => props.theme.borders.borderViolet};
  box-shadow: ${props => props.theme.boxShadows.boxShadowViolet};
  background-color: ${props => props.theme.colors.backgroundViolet};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.medium};
`

export default StyledButton;
