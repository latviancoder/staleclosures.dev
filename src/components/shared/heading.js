import styled from 'styled-components';
import { breakpointS } from '../../constants/constants';

const Heading = styled.h1`
  margin-top: 0;
  font-family: 'Poppins', serif;
  font-size: 30px;
  line-height: 35px;
  font-weight: 800;
  word-break: break-word;
  margin-bottom: 20px;
  @media (min-width: ${breakpointS}) {
    font-size: 40px;
    line-height: 45px;
  }
`;

export default Heading;