import React from 'react';
import { Link, graphql } from 'gatsby';

import Heading from '../components/shared/heading';
import SEO from '../components/seo';

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
      <>
        <Link to={node.fields.slug} className="link" key={node.frontmatter.title}>
          <Heading as="h3">{node.frontmatter.title}</Heading>
        </Link>
        <p>{node.frontmatter.description}</p>
      </>
    ))}
  </>;
};

export default IndexPage;