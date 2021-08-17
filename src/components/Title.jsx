import React from 'react'
import styled from 'styled-components'



const Name = styled("h1")`
  color: ${({color}) => (color)};
  text-align:center;
  
  
`;
function Title(props) {
  
  return (
    <Name {...props}/>
      
    
  )
}

export default Title
