import React, { memo } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import Description from './description';
import ReactLogo from './react-logo';
import { breakpointM, breakpointS } from '../../constants/constants';

const Logo = styled(animated.div)`
  will-change: transform;
  flex: 0 0 138px;
  height: 138px;
  margin-right: 45px;
  margin-left: 35px;
  @media (min-width: ${breakpointM}) {
    margin-left: 7px;
  }
`;

const Container = styled.header`
  display: none;
  align-items: center;
  @media (min-width: ${breakpointS}) {
    display: flex;
    padding: 25px 0;
  }
  @media (min-width: ${breakpointM}) {
    padding: 50px 0;
  }
`;

const Header = memo(() => {
  return <Container>
    <Logo>
      <ReactLogo/>
    </Logo>
    <Description/>
  </Container>;
});

export default Header;