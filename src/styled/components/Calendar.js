import styled, {css} from 'styled-components';
import {Col,Row} from "react-bootstrap"

export const StyledCalendarTitle = styled('h3')`
  color: ${props=>props.color || props.theme.colors.primary};
  margin: 20px 0;
  text-align: center;
  font-size: 18px;
`



export const StyledCol = styled(Col)`
text-align:center;
width: 14.285714%;
flex:0 0 auto;
color: ${props => props.color || props.theme.colors.primary};
transition: ${props => props.theme.transition.transition};
${props => props.border && css`
  border:1px solid transparent;
  &:hover{
    border:1px dashed ${props=>props.theme.colors.yellow};
  }
`}

&:hover{
  cursor: pointer;
  color:${props => props.theme.colors.yellow};
  
}


`;

export const CalendarWrapper = styled("div")`
  width:350px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledRow = styled(Row)`
  ${props => props.underline && css`
    border-bottom: 1px solid ${props=>props.color || props.theme.colors.primary};
  `};
  ${props => props.marginBottom && css `
    margin-bottom:  ${props=>props.marginBottom || "0"};
  `};
`




