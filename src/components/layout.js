import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import ReactLogo from './react-logo';
import Footer from './footer/footer';
import Description from './description';
import SEO from './seo';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Merriweather', 'Georgia', serif;
    background: #1c0abb;
    color: #fff;
  }
  body, html {
    margin: 0;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: #BAD7FF;
  }
`;

const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(animated.div)`
  will-change: transform;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const Main = styled.div`
  background: #fff;
  padding: 50px;
`;

function Layout({ children }) {
  console.log(children);

  const containerRef = useRef(null);
  const [rect, setRect] = useState(null);

  let translateTo;
  if (rect) {
    // if (rect.width > 1900) {
    //   translateTo = `-${rect.width / 3.5 + 'px'},0,0`;
    // } else {
    translateTo = `0px,-${rect.height / 3},0`
    // }
  } else {
    translateTo = '0px,0px,0';
  }

  const logoProps = useSpring({
    transform: `translate3d(${translateTo}) scale(0.5)`,
    from: { transform: `translate3d(${translateTo}) scale(1)` },
    config: {
      mass: 10, tension: 580, friction: 150
    },
    delay: 1500
  });

  useLayoutEffect(() => {
    if (containerRef.current) {
      setRect(containerRef.current.getBoundingClientRect());
    }
  }, []);

  return <>
    <GlobalStyle/>
    <SEO/>
    <Container ref={containerRef}>
      {/*<Logo style={logoProps}>*/}
      {/*  <ReactLogo/>*/}
      {/*</Logo>*/}
      <Description/>
      <Main>
        {children}
      </Main>
      {/*<Footer/>*/}
    </Container>
  </>;
}

export default Layout;