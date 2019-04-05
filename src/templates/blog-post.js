import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';

import Heading from '../components/shared/heading';
import SEO from '../components/seo';

const StyledContainer = styled.div`

`;

export const StyledBlogPost = styled.div`
  font-size: 16px;
  line-height: 28px;
  h2 {
    margin: 50px 0 30px;
  }
  hr {
    bottom: 0;
    height: 0;
    border: 0;
    border-bottom: 1px #ddd solid;
  }
  .gatsby-resp-image-link {
    box-shadow: none;
  }
  p {
    margin-top: 1.6em;
    margin-bottom: 1.6em;
  }
  blockquote {
    margin-left: -20px;
    padding-left: 15px;
    border-left: 5px #ddd solid;
    font-size: 19px;
    font-style: italic;
  }
  img {
    max-width: 100%;
  }
  .language-text {
    font-family: 'Fira Mono',monospace;
    padding: 2px 3px;
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
    line-height: 1.5;
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
    
    code[class*="language-"] {
      font-family: 'Fira Mono', monospace;
      font-weight: 400;
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
    
    .token.attr-name {
      color: #ADDB67;
    }
    
    .token.operator,
    .token.punctuation,
    .token.tag .punctuation {
        color: #e189ff;
    }
    
    .token.tag,
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

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;
  return <>
    <SEO title={title}/>

    <StyledContainer>
      <Heading as="h1" css={css`margin-top: -10px`}>{title}</Heading>
      <StyledBlogPost dangerouslySetInnerHTML={{ __html: post.html }}/>
    </StyledContainer>
  </>;
}

export default BlogPost;
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;