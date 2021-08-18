import styled, {
  css
} from 'styled-components';

export const StyledFlexUl = styled('ul')
`
  display: flex;
  flex-wrap:wrap;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
`;