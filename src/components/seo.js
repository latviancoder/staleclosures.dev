import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title || data.site.siteMetadata.title;
        const metaDescription = description || data.site.siteMetadata.description;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]}
          >
            <link href="https://fonts.googleapis.com/css?family=Fira+Mono|Poppins:800|Merriweather:400,700" rel="stylesheet"/>
          </Helmet>
        );
      }}
    />
  );
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
