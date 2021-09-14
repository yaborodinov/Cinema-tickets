import styled from 'styled-components';

export const StyledTime = styled.li `
  list-style: none;
  background-color: ${props => props.theme.colors.backgroundViolet};
  border-radius: 5px;
  padding: 3px 12px;
  color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadows.boxShadowViolet};
  font-size: ${props => props.theme.fontSize.small};
  transition: ${props => props.theme.transition.transition};
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.background || props.theme.colors.yellow};
    color: ${props => props.theme.colors.secondary};
  };
`;
