import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
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