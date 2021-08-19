import styled from 'styled-components';
import {Col} from "react-bootstrap"

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


`;

export const CalendarWrapper = styled("div")`
  width:350px;
  margin-left: auto;
  margin-right: auto;
`;




