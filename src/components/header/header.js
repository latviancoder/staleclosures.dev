import React, { memo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { animated } from 'react-spring';

import Description from './description';
import ReactLogo from './react-logo';
import { breakpointM, breakpointS } from '../../constants/constants';

const Logo = styled(animated.div)`
  will-change: transform;
  flex: 0 0 60px;
  height: 60px;
  margin-right: 10px;
  margin-left: 10px;
  @media (min-width: ${breakpointM}) {
    margin-left: 7px;
    margin-right: 45px;
    flex: 0 0 138px;
    height: 138px;
  }
`;

const Container = styled.header`
  padding: 10px 0;
  display: flex;
  align-items: center;
  @media (min-width: ${breakpointS}) {
    padding: 25px 0;
  }
  @media (min-width: ${breakpointM}) {
    padding: 50px 0;
  }
`;

const Header = memo(() => {
  return <Container>
    <Link to="/">
      <Logo>
        {process.env.NODE_ENV !== 'development' ? <ReactLogo/> : 'logo here'}
      </Logo>
    </Link>
    <Description/>
  </Container>;
});

export default Header;