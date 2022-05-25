import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { BlockHeading } from 'components/atoms/Typography';
import CardList from 'components/molecules/CardList';

import { theme } from 'theme/index';

type ExploreMoreWorkBlockProps = {
  heading: string;
};

const ExploreMoreWorkBlock = ({ heading }: ExploreMoreWorkBlockProps) => {
  const portfolioItems = useStaticQuery(graphql`
    query MorePortofolioItemsQuery {
      allPortfolioItem(limit: 4) {
        nodes {
          title
          excerpt
          image {
            id
            gatsbyImageData
            alt
            url
          }
          uri
        }
      }
    }
  `);

  const { allPortfolioItem } = portfolioItems;
  console.log(portfolioItems);

  const getCards = () => {
    let allPortfolioItems = allPortfolioItem.nodes;

    return allPortfolioItems.map((node: any) => ({
      heading: node.title,
      content: node.excerpt,
      image: node.image,
      link: node.uri,
    }));
  };

  return (
    <Section background={theme.colors.sectionBackground}>
      <Container overflow>
        {heading && (
          <>
            <BlockHeading>{heading}</BlockHeading>
            <Spacing size={4} />
          </>
        )}
        <CardList cards={getCards()} overflow />
      </Container>
    </Section>
  );
};

export default ExploreMoreWorkBlock;
