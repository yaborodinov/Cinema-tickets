import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap'

export const StyledCalendarTitle = styled('h3')`
  color: ${props=>props.color || props.theme.colors.primary};
  margin: 20px 0;
  text-align: center;
  font-size: 18px;
`

export const StyledCol = styled(Col)`
  text-align:center;
  width: 14.285714%;
  flex: 0 0 auto;
  color: ${props => props.color || props.theme.colors.primary};
  transition: ${props => props.theme.transition.transition};
  ${props => props.border && css`
    border: 1px dashed transparent;
    &:hover{
      border: 1px dashed ${props=>props.theme.colors.yellow};
    };
  `};
  &.active{
    border: 1px dashed ${props => props.theme.colors.yellow};
    color:${props => props.theme.colors.yellow};
  }
  
  &:hover{
    cursor: pointer;
    color: ${props => props.theme.colors.yellow};
  }
`;

export const CalendarWrapper = styled('div')`
  max-width: 350px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
`;