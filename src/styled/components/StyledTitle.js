import styled from 'styled-components';

import { theme } from '../Global';

export const StyledTitle = styled('h1')`
  color: ${props => props.color || theme.colors.primary};
  text-align: center;
  font-weight: 500;
`;
