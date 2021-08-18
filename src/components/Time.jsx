import React from 'react'
import styled from 'styled-components';



const StyledTime = styled.li`
  list-style: none;
  background-color: #aa85ee;
  border-radius: 25px;
  padding: 5px 15px;
  color: #fff;
  box-shadow: 0px 0px 15px 4px #9363eb;
  font-size: 16px;
  transition: all linear 0.1s;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: #b99cf0;
  }
`;

const Time=({time})=> <StyledTime>{time}</StyledTime>

export default Time
