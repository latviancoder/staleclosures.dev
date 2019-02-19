import React from 'react';
import styled from 'styled-components';

import Computer from './computer';
import Glass from './glass';
import Mouse from './mouse';
import Dan from './dan';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  display: flex;
  align-items: flex-end;
  border-bottom: 3px #fff solid;
  width: 360px;
  padding: 0 20px;
  margin: 0 auto;
`;

export default function Footer() {
  return <Container>
    <Dan/>
    <div style={{ height: '50%' }}>
      <Glass/>
    </div>
    <Computer/>
    <div style={{ height: '10%' }}>
      <Mouse/>
    </div>
  </Container>;
}