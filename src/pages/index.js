import React from 'react';
import { Link, graphql } from 'gatsby';

import Heading from '../components/shared/heading';
import SEO from '../components/seo';
import { StyledBlogPost } from '../templates/blog-post';
import { css } from 'styled-components';

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title,
            description
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return <>
    <SEO/>
    {postList.edges.map(({ node }, i) => (
      <div css={css`margin-bottom: 60px;`}>
        <Link to={node.fields.slug} className="link" key={node.frontmatter.title}>
          <Heading as="h3"css={css`margin-top: -10px`}>{node.frontmatter.title}</Heading>
        </Link>
        <StyledBlogPost>{node.frontmatter.description}</StyledBlogPost>
      </div>
    ))}
  </>;
};

export default IndexPage;