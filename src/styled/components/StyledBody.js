import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';

export const StyledCalendarTitle = styled('h3')`
  display: block;
  color: ${props => props.color || props.theme.colors.primary};
  margin: 20px 0;
  text-align: center;
  font-size: ${props => props.theme.fontSize.medium};
  
  &.disabled {
    display: none;
  }
`;

export const StyledCalendarCol = styled(Col)`
  font-size: ${props => props.theme.fontSize.small};
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  width: 14.285714%;
  flex: 0 0 auto;
  color: ${props => props.color || props.theme.colors.primary};
  transition: ${props => props.theme.transition.transition};
  ${props => props.border && css`
    border: 1px dashed transparent;
    &:hover {
      border: 1px dashed ${props => props.theme.colors.yellow};
    };
  `};
  &.active {
    border: 1px dashed ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.yellow};
  }
  
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.yellow};
  }
  @media(min-width: ${props => props.theme.media.small}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export const CalendarWrapper = styled('div')`
  min-width: 200px;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  @media(min-width: ${props => props.theme.media.small}) {
  max-width: 350px;
  min-width: 300px;
  }
`;

export const FlexUl = styled('ul')`
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 250px;
  min-width: 200px;
`;

//  Card

export const StyledCardImg = styled('img')`
  display: block;
  height: auto;
  width: 100%;
`;
