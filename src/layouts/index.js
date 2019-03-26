import React, { useRef } from 'react';
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
    color: #051153;
    text-decoration: none;
  }
  .language-text {
      font-family: 'Hack',monospace;
      padding: .15em .3em .05em;
      position: relative;
      background: aliceblue;
      z-index: -1;
  }
  .gatsby-highlight {
    margin: 30px -20px;
    //background: #282c34;
    background: #011627;
    border-radius: 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-variant-ligatures: contextual;
    font-size: 14px;
    font-family: 'Hack', monospace;
    line-height: 1.5;
    font-weight: 350;
    color: #fff;
    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
        color: inherit;
        background: rgba(33,66,131,.85);
    }
    
    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
        color: inherit;
        background: rgba(33,66,131,.85);
    }
    
    /* Code blocks */
    pre[class*="language-"] {
      padding: 20px;
      margin: 0;
      overflow: auto;
    }
    
    .token.comment,
    .token.prolog,
    .token.cdata {
      color: #808080;
    }
    
    .token.delimiter,
    .token.boolean,
    .token.keyword,
    .token.selector,
    .token.important,
    .token.atrule {
      color: #9abeff;
    }
    
    .token.operator,
    .token.punctuation,
    .token.attr-name {
        color: #e189ff;
    }
    
    .token.tag,
    .token.tag .punctuation,
    .token.doctype,
    .token.builtin {
        color: #e8bf6a;
    }
    
    .token.entity,
    .token.number,
    .token.symbol {
        color: #6897bb;
    }
    
    .token.property,
    .token.constant,
    .token.variable {
        color: #9876aa;
    }
    
    .token.string,
    .token.char {
      color: #ADDB67;
    }
    
    .token.attr-value,
    .token.attr-value .punctuation {
        color: #a5c261;
    }
    .token.attr-value .punctuation:first-child {
        color: #a9b7c6;
    }
    
    .token.url {
      color: #287bde;
      text-decoration: underline;
    }
    
    .token.function {
      color: #94f6e2;
    }
    
    .token.regex {
        background: #364135;
    }
    
    .token.bold {
      font-weight: bold;
    }
    
    .token.italic {
      font-style: italic;
    }
    
    .token.inserted {
        background: #294436;
    }
    
    .token.deleted {
        background: #484a4a;
    }
    
    code.language-css .token.property,
    code.language-css .token.property + .token.punctuation {
      color: #a9b7c6;
    }
    
    code.language-css .token.id {
      color: #ffc66d;
    }
    
    code.language-css .token.selector > .token.class,
    code.language-css .token.selector > .token.attribute,
    code.language-css .token.selector > .token.pseudo-class,
    code.language-css .token.selector > .token.pseudo-element {
      color: #ffc66d;
    }
  }
  .gatsby-highlight-code-line {
    background-color: #042e51;
    display: block;
    margin-right: -20px;
    margin-left: -20px;
    padding: 0 17px;
    border-left: 3px solid #e189ff;
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
    color: #78b4bf;
    box-shadow: 0 1px 0 0 #78b4bf;
    text-decoration: none;
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