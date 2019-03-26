import { animated, useSpring } from 'react-spring';
import React from 'react';
import useScrollingPosition from './useScrollingPosition';

export default function Glass() {
  const scroll = useScrollingPosition();
  const dashArray = 35;

  const { n: svgOffset } = useSpring({
    n: dashArray - (dashArray * scroll),
    from: { n: dashArray },
    config: { mass: 1, tension: 30, friction: 10 }
  });

  return <animated.svg
    viewBox="0 0 25.828 53.424"
    height="100%"
    width="100%"
    strokeDashoffset={svgOffset}
    strokeDasharray={dashArray}
    style={{ position: 'relative', bottom: '-3px' }}
  >
    <g fill="none" stroke="#fff">
      <g strokeWidth={2.667}>
        <path
          d="M1.002 20.674C2.325 31.257 3.648 41.841 4.97 47.132c1.323 5.292 2.646 5.292 3.968 5.292M24.814 20.674c-1.323 10.583-2.645 21.167-3.968 26.458-1.324 5.292-2.646 5.292-3.97 5.292"
          strokeLinecap="round"
          strokeWidth={2.00025}
        />
        <path d="M8.94 52.424h7.937" strokeWidth={2.00025} />
        <path
          d="M68.792 201.75h31.75"
          transform="matrix(.74961 0 0 .75 -50.553 -130.638)"
          strokeLinecap="round"
        />
      </g>
      <path
        transform="matrix(1 0 0 1.125 -74.14 -205.335)"
        d="M76.73 189.844l2.645 10.583"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        transform="matrix(-1.5 0 0 1.75 139.908 -331.132)"
        d="M76.73 189.844l2.645 10.583"
        strokeWidth={1.234}
        strokeLinecap="round"
      />
    </g>
  </animated.svg>;
}