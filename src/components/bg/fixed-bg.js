import React from 'react';
import styled from 'styled-components';
import Computer from './computer';
import Glass from './glass';
import Mouse from './mouse';
import Dan from './dan';

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 60vh;
  background: #1c0abb;
  z-index: 0;
`;

const ComputerContainer = styled.div`
  position: absolute;
  bottom: -8px;
  left: calc((100% - 800px)/4 - 142px/2);
  width: 142px;
`;

const GlassContainer = styled.div`
  position: absolute;
  bottom: -2px;
  right: calc((100% - 800px)/4);
  width: 25px;
`;

const MouseContainer = styled.div`
  position: absolute;
  bottom: -6px;
  left: calc((100% - 800px)/4 + 5%);
  width: 22px;
`;

const DanContainer = styled.div`
  position: absolute;
  bottom: 100px;
  right: calc((100% - 800px)/4 - 5%);
`;

export default function FixedBg() {
  return <Bg>
    {window.location.pathname !== '/' && <>
      <ComputerContainer>
        <Computer/>
      </ComputerContainer>
      <GlassContainer>
        <Glass/>
      </GlassContainer>
      <MouseContainer>
        <Mouse/>
      </MouseContainer>
      <DanContainer>
        <Dan/>
      </DanContainer>
    </>}
  </Bg>;
}