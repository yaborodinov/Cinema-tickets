import React from 'react'
import {Alert} from 'react-bootstrap'
 
function AlertMessage({text}) {
  return <Alert variant="warning ">{text}</Alert>;
}

export default AlertMessage
