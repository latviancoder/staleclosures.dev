import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import danImg from '../../images/dan.png';

const Container = styled(animated.div)`
  position: absolute;
  bottom: 42px;
  right: 48px;
`;

export default function Dan() {
  const containerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 4000
  });

  return <Container style={containerSpring}>
    <img
      src={danImg}
      width={30}
      style={{ border: '2px #fff solid', borderRadius: '2px' }}
      alt=""
    />
  </Container>;
}