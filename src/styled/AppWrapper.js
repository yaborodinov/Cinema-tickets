import styled from 'styled-components';
import { theme } from './Global';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: ${props => props.color || theme.colors.violet};
`;
