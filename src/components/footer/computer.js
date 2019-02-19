import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';
import github from '../../images/github.svg';

const Icons = styled(animated.div)`
  position: absolute;
  top: 22px;
  right: 10px;
  left: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 12px;
    height: 12px;
  }
  a:not(:last-child) {
    margin-right: 15px;
  }
`;

export default function Computer() {
  const { n: svgOffset } = useSpring({
    n: 0,
    from: { n: 500 },
    config: { mass: 1, tension: 30, friction: 40 },
    delay: 2500
  });

  const iconSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 3000
  });

  return <div style={{ position: 'relative', bottom: '-6px' }}>
    <Icons style={iconSpring}>
      <a href="https://twitter.com/latviancoder"><img src={twitter} alt=""/></a>
      <a href="https://www.youtube.com/channel/UCxUdIYLPi-W6GprJh3gyDKw"><img src={youtube} alt=""/></a>
      <a href="https://github.com/latviancoder"><img src={github} alt=""/></a>
    </Icons>
    <animated.svg
      viewBox="0 0 107.75534 100.8941"
      height="100%"
      width="100%"
      strokeDashoffset={svgOffset}
      strokeDasharray={500}
    >
      <g
        transform="translate(-46.664,-100.24734)"
        id="layer1">
        <path
          id="rect815"
          d="m 52.916656,101.20834 h 95.250034 c 2.93157,0 5.29165,2.36008 5.29165,5.29166 v 58.20834 c 0,2.93158 -2.36008,5.29166 -5.29165,5.29166 H 52.916656 C 49.985079,170 47.625,167.63992 47.625,164.70834 V 106.5 c 0,-2.93158 2.360079,-5.29166 5.291656,-5.29166 z"
          style={{
            "opacity": "1",
            "fill": "none",
            "stroke": "#fff",
            "strokeWidth": "2",
            "strokeLinejoin": "round",
            "strokeMiterlimit": "4",
            "strokeOpacity": "1",
            "paintOrder": "stroke fill markers"
          }}/>
        <path
          id="path827"
          d="m 97.039603,183.05198 c -0.122522,10.04676 -0.245047,20.09379 9.557327,25.11744 9.80237,5.02365 29.52807,5.02365 49.25455,5.02365"
          style={
            {
              "fill": "none",
              "stroke": "#fff",
              "strokeWidth": "2",
              "strokeLinecap": "butt",
              "strokeLinejoin": "miter",
              "strokeMiterlimit": "4",
              "strokeOpacity": "1"
            }
          }
          transform="matrix(0.78845168,0,0,1,29.322295,-13.05198)"/>
        <path
          id="path827-3"
          d="m 97.039603,183.05198 c -0.122522,10.04676 -0.245047,20.09379 9.557327,25.11744 9.80237,5.02365 29.52807,5.02365 49.25455,5.02365"
          style={
            {
              "fill": "none",
              "stroke": "#fff",
              "strokeWidth": "2",
              "strokeLinecap": "butt",
              "strokeLinejoin": "miter",
              "strokeMiterlimit": "4",
              "strokeOpacity": "1"
            }
          }
          transform="matrix(-0.78404396,0,0,1,171.33331,-13.05198)"/>
        <path
          id="rect857"
          d="m 52.916677,105.17709 h 95.249993 c 0.7329,0 1.32292,0.51306 1.32292,1.15036 v 50.61594 c 0,0.6373 -0.59002,1.15036 -1.32292,1.15036 H 52.916677 c -0.732902,0 -1.322927,-0.51306 -1.322927,-1.15036 v -50.61594 c 0,-0.6373 0.590025,-1.15036 1.322927,-1.15036 z"
          style={
            {
              "opacity": "1",
              "fill": "none",
              "stroke": "#fff",
              "strokeWidth": "2",
              "strokeLinejoin": "round",
              "strokeMiterlimit": "4",
              "strokeOpacity": "1",
              "paintOrder": "stroke fill markers"
            }
          }/>
        <path
          id="path865"
          d="m 47.624999,163.38542 c 35.278041,0 70.555821,0 105.833331,0"
          style={
            {
              "fill": "none",
              "stroke": "#fff",
              "strokeWidth": "2",
              "strokeLinecap": "butt",
              "strokeLinejoin": "miter",
              "strokeMiterlimit": "4",
              "strokeOpacity": "1"
            }
          }
          transform="translate(9.9999998e-7,-1.32292)"/>
        <path
          id="path872"
          d="m 101.57313,166.15956 a 0.92406499,0.92406499 0 0 1 -0.92407,0.92407 0.92406499,0.92406499 0 0 1 -0.924062,-0.92407 0.92406499,0.92406499 0 0 1 0.924062,-0.92406 0.92406499,0.92406499 0 0 1 0.92407,0.92406 z"
          style={
            {
              "opacity": "1",
              "fillOpacity": "1",
              "stroke": "#fff",
              "strokeWidth": "0.69850069",
              "strokeLinejoin": "bevel",
              "strokeMiterlimit": "4",
              "strokeOpacity": "1",
            }
          }/>
      </g>
    </animated.svg>
  </div>;
}