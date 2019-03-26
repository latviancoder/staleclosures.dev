import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { breakpointM, breakpointS } from '../../constants/constants';

const Container = styled(animated.div)`
  color: #fff;
  a {
    color: #94f6e2;
  }
  font-size: 16px;
  @media (min-width: ${breakpointS}) {
    font-size: 19px;
  }
  @media (min-width: ${breakpointM}) {
    font-size: 26px;
    line-height: 41px;
  }
`;

export default function Description() {
  return <Container>
    Hi, my name is Sergey.
    I create
    {' '}<a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCxUdIYLPi-W6GprJh3gyDKw" target="_blank">
    video-tutorials
  </a>, talk at
    {' '}<a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=nRQoduHpGcw" target="_blank">meetups</a>,
    {' '}experiment with <a rel="noopener noreferrer" href="https://github.com/latviancoder" target="_blank">different technologies</a> and
    {' '}<a rel="noopener noreferrer" href="https://twitter.com/latviancoder" target="_blank">tweet</a> stuff.
  </Container>;
}