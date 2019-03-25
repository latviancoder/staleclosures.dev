import React, { memo } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import Description from './description';
import ReactLogo from './react-logo';

const Logo = styled(animated.div)`
  will-change: transform;
  flex: 0 0 138px;
  height: 138px;
  margin-right: 45px;
  margin-left: 7px;
`;

const Container = styled.header`
  display: flex;
  align-items: center;
  padding:  50px 0;
`;

const Header = memo(() => {
  return <Container>
    <Logo>
      {/*<ReactLogo/>*/}
    </Logo>
    <Description/>
  </Container>;
});

export default Header;