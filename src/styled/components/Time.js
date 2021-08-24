import styled from 'styled-components';

export const StyledTime = styled.li `
  list-style: none;
  background-color: #aa85ee;
  border-radius: 25px;
  padding: 3px 12px;
  color: ${props=>props.theme.colors.primary};
  box-shadow: 0px 0px 15px 4px #9363eb;
  font-size: 13px;
  transition: ${props=>props.theme.transition.transition};
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.background || props.theme.colors.yellow};
    color: ${props=>props.theme.colors.secondary};
  }
`;