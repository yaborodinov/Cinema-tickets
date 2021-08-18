import styled from 'styled-components'



export const StyledTitle = styled('h1')
`
  color: ${props=>props.color || props.theme.colors.primary};
  text-align:center;
  font-weight: 500;
  
  
`;