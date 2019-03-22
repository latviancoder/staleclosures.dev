import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import SEO from './seo';
import Header from './header/header';
import FixedBg from './bg/fixed-bg';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Merriweather', 'Georgia', serif;
    color: #073953;
  }
  body, html {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const Main = styled.div`
  background: #fff;
  padding: 50px;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 1;
`;

function Layout({ children }) {
  const containerRef = useRef(null);

  return <>
    <GlobalStyle/>
    <SEO/>
    <FixedBg/>
    <Container ref={containerRef}>
      <Header/>
      <Main>
        {children}
      </Main>
    </Container>
  </>;
}

export default Layout;