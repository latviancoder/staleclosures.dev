import React from 'react';
import { useSpring, animated } from 'react-spring';

const svgWidth = 184;
const svgHeight = 166;

function ReactLogo() {
  const electron = useSpring({
    to: async (next) => {
      while (true) {
        await next({ degree: 180 });
      }
    },
    from: { degree: -180 },
    config: { duration: 10000 },
    reset: true,
    delay: 1000
  });

  const { opacity } = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1500
  });

  const ellipse1 = useSpring({
    offset: 0,
    from: { offset: 500 },
    config: { mass: 1, tension: 15, friction: 10 },
  });

  const ellipse2 = useSpring({
    offset: 0,
    from: { offset: 500 },
    config: { mass: 1, tension: 15, friction: 10 },
    delay: 500
  });

  const ellipse3 = useSpring({
    offset: 0,
    from: { offset: 500 },
    config: { mass: 1, tension: 15, friction: 10 },
    delay: 1000
  });

  const { dashArray } = useSpring({
    dashArray: 400,
    from: { dashArray: 100 },
    config: { mass: 30, tension: 30, friction: 0, clamp: true },
  });

  return (
    <svg version="1.1" width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      <g transform={`translate(${svgWidth / 2} ${svgHeight / 2})`}>
        <circle fill="#fff" r="16"/>

        <animated.g fill="none" stroke="#fff" strokeWidth="4">
          <animated.ellipse
            rx="84"
            ry="32"
            strokeDashoffset={ellipse1.offset}
            strokeDasharray={dashArray}
            transform="rotate(0)"
          />

          <animated.ellipse
            rx="84"
            ry="32"
            strokeDashoffset={ellipse2.offset}
            strokeDasharray={dashArray}
            transform="rotate(120)"
          />

          <g transform="rotate(60)">
            <animated.ellipse
              rx="84"
              ry="32"
              strokeDashoffset={ellipse3.offset}
              strokeDasharray={dashArray}
            />
            <animated.circle
              cx={electron.degree.interpolate(degree => 84 * Math.cos(degree * Math.PI / 180))}
              cy={electron.degree.interpolate(degree => 32 * Math.sin(degree * Math.PI / 180))}
              r="6"
              fill="#fff"
              stroke="none"
              style={{ opacity }}
            />
          </g>
        </animated.g>
      </g>
    </svg>
  );
}

export default ReactLogo;
