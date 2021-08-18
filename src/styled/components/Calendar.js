import styled,{css} from 'styled-components';

export const StyledCalendarTitle = styled('h3')
`
  color: ${props=>props.color || props.theme.colors.primary};
  margin: 20px 0;
  text-align: center;
  font-size: 18px;
`
export const StyledCol = styled('div')
`
  ${(props) =>
    props.fixWidth &&
    css`
      max-width: 51.5px;
      min-width: 51.5px;
      margin: 5px 0;
      text-align: center;
      color: ${props=>props.color || props.theme.colors.primary};
      &:hover {
        cursor: pointer;
        color: #feef5c;
      }
    `}
`;