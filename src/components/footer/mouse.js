import React from 'react';
import { animated, useSpring } from 'react-spring';

export default function Mouse() {
  const { n: svgOffset } = useSpring({
    n: 0,
    from: { n: 100 },
    config: { mass: 1, tension: 30, friction: 130 },
    delay: 3000
  });

  return <animated.svg
    width="100%"
    height="100%"
    viewBox="0 0 21.926 7.056"
    strokeDashoffset={svgOffset}
    strokeDasharray={100}
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