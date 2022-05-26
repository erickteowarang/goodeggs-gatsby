import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { BlockHeading } from 'components/atoms/Typography';
import CardList from 'components/molecules/CardList';
import DataContext from 'context/DataProvider';

import { theme } from 'theme/index';

type ExploreMoreWorkBlockProps = {
  heading: string;
};

const ExploreMoreWorkBlock = ({ heading }: ExploreMoreWorkBlockProps) => {
  const portfolioItems = useStaticQuery(graphql`
    query MorePortofolioItemsQuery {
      allPortfolioItem(sort: {fields: publishDate, order: DESC}, limit: 5) {
        nodes {
          databaseId
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

  const GatsbyPageContext = useContext(DataContext);
  const { allPortfolioItem } = portfolioItems;

  const getCards = () => {
    const currentPageID = GatsbyPageContext.pageContext.databaseId;
    let allPortfolioItems = allPortfolioItem.nodes;
    console.log(allPortfolioItems);
    console.log(currentPageID);

    return allPortfolioItems.filter((node: any) => node.databaseId !== currentPageID).map((node: any) => ({
      heading: node.title,
      content: node.excerpt,
      image: node.image,
      link: node.uri,
    })).slice(0, 4);
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
