import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

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
  return (
    <Layout>
      asd
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" key={node.frontmatter.title}>
          <div>
            <h3>{node.frontmatter.title}</h3>
            <span>{node.frontmatter.date}</span>
            <p>{node.frontmatter.description}</p>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;