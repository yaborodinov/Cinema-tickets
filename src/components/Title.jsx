import React from 'react'
import styled from 'styled-components'



const Name = styled("h1")`
  color: #fff;
  text-align:center;
  font-weight: 500;
  
  
`;
function Title(props) {
  
  return (
    <Name {...props}/>
      
    
  )
}

export default Title
