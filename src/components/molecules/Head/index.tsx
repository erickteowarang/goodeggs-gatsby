import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type HeadProps = {
  title: string;
  description: string;
  image: {
    url: string;
  };
};

const Head = ({ title, description, image, ...props }: HeadProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-au',
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="description"
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:author" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image.url} />}
    </Helmet>
  );
};

export default Head;
