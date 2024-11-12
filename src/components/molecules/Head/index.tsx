import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type HeadProps = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  seo: {
    title: string;
    metaDesc: string;
    canonical: string;
    schema: {
      raw: string;
    }
  };
};

const Head = ({ title, description, image, seo, ...props }: HeadProps) => {
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

  const seoTitle = seo?.title || title || site.siteMetadata.title;
  const metaDescription = seo?.metaDesc || description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-au',
      }}
    >
      <meta charSet="utf-8" />
      <title>{seoTitle}</title>
      <meta
        name="description"
        property="og:description"
        content={metaDescription}
      />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:author" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image.url} />}
      {seo?.canonical && <link rel="canonical" href={seo.canonical} />}
      {seo?.schema && seo.schema.raw && <script type="application/ld+json">{seo.schema.raw}</script>}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-68YX3KRQYX"></script>
      <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-68YX3KRQYX');
        `}}>
      </script>
    </Helmet>
  );
};

export default Head;
