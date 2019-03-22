import React from 'react';
import { animated, useSpring } from 'react-spring';
import useScrollingPosition from './useScrollingPosition';

export default function Mouse() {
  const scroll = useScrollingPosition();
  const dashArray = 30;

  const { n: svgOffset } = useSpring({
    n: dashArray - (dashArray * scroll),
    from: { n: dashArray },
    config: { mass: 1, tension: 30, friction: 10 }
  });

  return <animated.svg
    width="100%"
    height="100%"
    viewBox="0 0 21.926 7.056"
    strokeDashoffset={svgOffset}
    strokeDasharray={dashArray}
  >
    <path
      d="M68.792 233.5c3.528-1.764 7.056-3.528 10.583-3.528 3.528 0 7.056 1.764 10.583 3.528"
      transform="matrix(.98854 0 0 1.55713 -67.503 -357.317)"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
    />
  </animated.svg>;
}