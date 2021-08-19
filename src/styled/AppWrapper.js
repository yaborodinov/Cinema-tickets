import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: ${props => props.color || props.theme.colors.violet};
  
`;
