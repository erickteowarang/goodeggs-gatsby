import * as React from 'react';
import Layout from 'components/organisms/Layout';
import Section from 'components/atoms/Section';
import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Link from 'components/atoms/Link';
import { Heading, Text } from 'components/atoms/Typography';

export default function NotFound() {
  return (
    <Layout 
      title="404: Page not found"
      seo={{
        "title": "Page not found - The Good Egg Collective - UX/UI design and development digital agency in Melbourne, Australia",
        "metaDesc": "We are a small team of designers and developers that help like-minded folk, companies, non-profits and entrepreneurs to innovate socially and environmentally responsible products that make a meaningful impact for the world.",
        "schema": {
            "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://thegoodeggcollective.com.au/\",\"url\":\"https://thegoodeggcollective.com.au/\",\"name\":\"The Good Egg Collective - UX/UI design and development digital agency in Melbourne, Australia\",\"isPartOf\":{\"@id\":\"https://thegoodeggcollective.com.au/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://thegoodeggcollective.com.au/#primaryimage\"},\"image\":{\"@id\":\"https://thegoodeggcollective.com.au/#primaryimage\"},\"thumbnailUrl\":\"/static/b5c12cf718341dab773a1606cd5a94d7/hero-banner.png\",\"datePublished\":\"2022-02-25T17:35:36+00:00\",\"dateModified\":\"2024-10-14T05:39:35+00:00\",\"description\":\"We are a small team of designers and developers that help like-minded folk, companies, non-profits and entrepreneurs to innovate socially and environmentally responsible products that make a meaningful impact for the world.\",\"breadcrumb\":{\"@id\":\"https://thegoodeggcollective.com.au/#breadcrumb\"},\"inLanguage\":\"en-AU\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://thegoodeggcollective.com.au/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-AU\",\"@id\":\"https://thegoodeggcollective.com.au/#primaryimage\",\"url\":\"/static/b5c12cf718341dab773a1606cd5a94d7/hero-banner.png\",\"contentUrl\":\"/static/b5c12cf718341dab773a1606cd5a94d7/hero-banner.png\",\"width\":1235,\"height\":448},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://thegoodeggcollective.com.au/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://thegoodeggcollective.com.au/#website\",\"url\":\"https://thegoodeggcollective.com.au/\",\"name\":\"The Good Egg Collective\",\"description\":\"UX/UI design and development digital agency in Melbourne, Australia\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://thegoodeggcollective.com.au/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-AU\"}]}"
        }
      }}
      footerData={{
        backgroundColor: 'grey',
        footerCtaHeading: `Let's talk digital`,
      }}
    >
      <Section>
          <Container>
            <Flex variant="column">
              <Heading variant="mega">404</Heading>
              <Heading as="h1">Page not found</Heading>
              <Flex variant="column">
                <Text variant="lead" center>
                  Sorry! We couldn’t find the page you were looking for.
                </Text>
                <Link to="/">
                  <span>Back to home</span>
                </Link>
              </Flex>
            </Flex>
            <Box paddingY={4}></Box>
          </Container>
      </Section>
    </Layout>
  );
}
