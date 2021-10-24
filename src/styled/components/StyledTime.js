import styled from 'styled-components';

import { theme } from '../Global';

export const StyledTime = styled.li `
  list-style: none;
  background-color: ${theme.colors.backgroundViolet};
  border-radius: 5px;
  padding: 3px 12px;
  color: ${theme.colors.primary};
  box-shadow: ${theme.boxShadows.boxShadowViolet};
  font-size: ${theme.fontSize.small};
  transition: ${theme.transition.transition};
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.background || theme.colors.yellow};
    color: ${theme.colors.secondary};
  };
`;
