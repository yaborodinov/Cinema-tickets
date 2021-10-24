import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';

import { theme } from '../Global';

export const StyledSubTitle = styled('h3')`
  display: block;
  color: ${props => props.color || theme.colors.primary};
  margin: 20px 0;
  text-align: center;
  font-size: ${theme.fontSize.medium};
  &.disabled {
    display: none;
  };
  &.active {
    color: ${props => props.color || theme.colors.yellow};
  };
  &.transparent {
    color: transparent;
  };
`;

export const StyledCalendarCol = styled(Col)`
  font-size: ${theme.fontSize.small};
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  width: 14.285714%;
  flex: 0 0 auto;
  color: ${props => props.color || theme.colors.primary};
  transition: ${theme.transition.transition};
  ${props => props.border && css`
    border: 1px dashed transparent;
    &:hover {
      border: 1px dashed ${theme.colors.yellow};
    };
  `};
  &.active {
    border: 1px dashed ${theme.colors.yellow};
    color: ${theme.colors.yellow};
  }
  
  &:hover {
    cursor: pointer;
    color: ${theme.colors.yellow};
  }
  @media(min-width: ${theme.media.small}) {
    font-size: ${theme.fontSize.medium};
  }
`;

export const CalendarWrapper = styled('div')`
  min-width: 200px;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  @media(min-width: ${theme.media.small}) {
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
