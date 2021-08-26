import styled from 'styled-components';
import { Col } from 'react-bootstrap'

const StyledPoster = styled(Col)`
  margin: 30px 20px;
  &:hover{
    cursor:pointer;
  }
  img{
    height: auto;
    width: 100%;
    border-radius:10px;
  }
  h2{
    color: ${props => props.theme.colors.primary};
    text-align: center;
  }
`

export default StyledPoster;