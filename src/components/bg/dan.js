import React from 'react';
import { animated, useSpring } from 'react-spring';

import danImg from '../../images/dan.png';
import useScrollingPosition from './useScrollingPosition';

export default function Dan() {
  const scroll = useScrollingPosition();

  const containerSpring = useSpring({
    opacity: scroll > 0.9 ? 1 : 0,
    from: { opacity: 0 },
    config: { mass: 1, tension: 30, friction: 10 }
  });

  return <animated.div style={containerSpring}>
    <img
      src={danImg}
      width={30}
      style={{ border: '2px #fff solid', borderRadius: '2px' }}
      alt=""
    />
  </animated.div>;
}