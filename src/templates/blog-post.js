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