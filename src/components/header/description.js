import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { breakpointM, breakpointS } from '../../constants/constants';

const Container = styled(animated.div)`
  font-size: 24px;
  line-height: 41px;
  color: #fff;
  a {
    color: #94f6e2;
  }
  display: none;
  @media (min-width: ${breakpointS}) {
    display: block;
  }
  @media (min-width: ${breakpointM}) {
    font-size: 26px;
  }
`;

export default function Description() {
  return <Container>
    Hi, my name is Sergey.
    I create
    {' '}<a href="https://www.youtube.com/channel/UCxUdIYLPi-W6GprJh3gyDKw" target="_blank">
    video-tutorials
  </a>, talk at
    {' '}<a href="https://www.youtube.com/watch?v=nRQoduHpGcw" target="_blank">meetups</a>,
    {' '}experiment with <a href="https://github.com/latviancoder" target="_blank">different technologies</a> and
    {' '}<a href="https://twitter.com/latviancoder" target="_blank">tweet</a> stuff.
  </Container>;
}