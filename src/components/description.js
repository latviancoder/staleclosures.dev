import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Container = styled(animated.div)`
  max-width: 750px;
  font-size: 20px;
  padding: 0 5%;
  text-align: center;
  @media (min-width: 750px) {
    padding: 0;
    font-size: 35px;
  }
  @media (min-width: 1500px) {
    font-size: 40px;
  }
  @media (min-width: 1900px) {
    text-align: left;
  }
`;

export default function Description() {
  const containerSpring = useSpring({
    opacity: 1,
    transform: 'translate3D(0,0,0)',
    from: { opacity: 0, transform: 'translate3D(20px, 0, 0)' },
    config: { mass: 1, tension: 15, friction: 5 },
    delay: 1700
  });

  return <Container style={containerSpring}>
    Hi, my name is Sergey.
    I create
    {' '}<a href="https://www.youtube.com/channel/UCxUdIYLPi-W6GprJh3gyDKw" target="_blank">
    video-tutorials
  </a>, talk at
    {' '}<a href="https://www.youtube.com/watch?v=nRQoduHpGcw" target="_blank">meetups</a>,
    {' '}experiment with <a href="https://github.com/latviancoder" target="_blank">different technologies</a> and
    {' '}<a href="https://twitter.com/latviancoder" target="_blank">tweet</a> interesting stuff.
  </Container>;
}