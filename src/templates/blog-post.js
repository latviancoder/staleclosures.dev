import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const StyledContainer = styled.div`

`;

const StyledHeading = styled.h1`
  margin-top: 0;
  font-family: 'Poppins', serif;
  font-size: 40px;
  font-weight: 800;
`;

const StyledContent = styled.div`
  font-size: 16px;
  line-height: 28px;
`;

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <StyledContainer>
        <StyledHeading>{title}</StyledHeading>
        <StyledContent dangerouslySetInnerHTML={{ __html: post.html }}/>
      </StyledContainer>
    </Layout>
  );
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