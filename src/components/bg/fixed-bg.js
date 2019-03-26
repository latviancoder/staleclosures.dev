import React from 'react';
import styled from 'styled-components';
import Computer from './computer';
import Glass from './glass';
import Mouse from './mouse';
import Dan from './dan';
import { breakpointM } from '../../constants/constants';

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 60vh;
  background: #011627;
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

const Icons = styled.div`
  display: none;
  @media (min-width: ${breakpointM}) {
    display: block;
  }
`;
export default function FixedBg() {
  const isHome = typeof window !== 'undefined' && window.location.pathname === '/';

  return <Bg>
    {!isHome && <Icons>
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
    </Icons>}
  </Bg>;
}