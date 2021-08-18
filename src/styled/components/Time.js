import styled from 'styled-components';


export const StyledTime = styled.li `
  list-style: none;
  background-color: #aa85ee;
  border-radius: 25px;
  padding: 5px 15px;
  color: ${props=>props.theme.colors.primary};
  box-shadow: 0px 0px 15px 4px #9363eb;
  font-size: 16px;
  transition: all linear 0.1s;
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${props=>props.theme.colors.yellow}; 
  }
`;