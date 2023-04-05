import React, { useContext } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { BlockHeading } from 'components/atoms/Typography';
import CardList from 'components/molecules/CardList';
import DataContext from 'context/DataProvider';

import { theme } from 'theme/index';

const OverflowContainer = styled.div`
  padding-left: 20px;

  @media screen and (min-width: ${theme.sizes.container}) {
    padding: 0;
    margin-left: calc((100vw - ${theme.sizes.container}) / 2);
  }
`;

type ExploreMoreWorkBlockProps = {
  heading: string;
};

const ExploreMoreWorkBlock = ({ heading }: ExploreMoreWorkBlockProps) => {
  const portfolioItems = useStaticQuery(graphql`
    query MorePortofolioItemsQuery {
      allPortfolioItem {
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
    const sortedPortfolioItems = allPortfolioItems
    .filter((node: any) => node.databaseId !== currentPageID)
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

    console.log(sortedPortfolioItems);

    return sortedPortfolioItems
      .map((node: any) => ({
        heading: node.title,
        content: node.excerpt,
        image: node.image,
        link: node.uri,
      }));
  };

  return (
    <Section background={theme.colors.sectionBackground}>
      <OverflowContainer>
        {heading && (
          <>
            <BlockHeading>{heading}</BlockHeading>
            <Spacing size={4} />
          </>
        )}
        <CardList cards={getCards()} overflow />
      </OverflowContainer>
    </Section>
  );
};

export default ExploreMoreWorkBlock;
