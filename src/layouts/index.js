import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FixedBg from '../components/bg/fixed-bg';
import Header from '../components/header/header';
import { breakpointM, breakpointS } from '../constants/constants';

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
  a {
    color: #073953;
    text-decoration: none;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const Main = styled.div`
  background: #fff;
  padding: 20px 15px;
  position: relative;
  z-index: 1;
  min-height: 60vh;
  a {
    color: #59bbbf;
    box-shadow: 0 1px 0 0 #59bbbf;
    &:hover {
      box-shadow: none;
    }
  }
  @media (min-width: ${breakpointS}) {
    padding: 40px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  @media (min-width: ${breakpointM}) {
    padding: 60px;
  }
`;

function Layout({ children }) {
  return <>
    <GlobalStyle/>
    <FixedBg/>
    <Container>
      <Header/>
      <Main>
        {children}
      </Main>
    </Container>
  </>;
}

export default Layout;