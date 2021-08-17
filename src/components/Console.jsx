import React from 'react'
import styled from 'styled-components'
import Flex from './Flex';
import Line from './Line';





const StyledConsole = styled("textarea")`
  width: 100%;
  height: 70vh;
  font-size: 24px;
  border: none;
  background: #000;
  resize:none;
  color: ${({color})=>color || "red"};
  &:focus{
    outline:none;
  }
`;



function Console({ color, ...props }) {
  console.log(props)
  
  const [lines, setLines] = React.useState(["C/users/ULBI_TV>"])
  
  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, "C/users/ULBI_TV>"]);
    }
  }
  return (
    <Flex margin="10px 0">
      <Flex direction="column" margin="0 10px">
        {lines.map((line,index) => (
          <Line key={index} color="green">{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
}

export default Console
