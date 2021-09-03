import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const StyledPoster = styled(Col)`
  margin: 30px 20px;
  padding: 12px;
  &.active{
    border-radius: 10px;
    box-shadow: 0px 0px 18px -2px ${props => props.theme.colors.yellow};
  }
  &:hover{
    cursor: pointer;
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
`;

export default StyledPoster;
