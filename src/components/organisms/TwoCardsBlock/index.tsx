import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { BlockHeading, BlockContent } from 'components/atoms/Typography';
import CardList from 'components/molecules/CardList';
import { BlockContentOptions } from 'components/generic';
import { PortfolioItemCard } from 'types/global';

type TwoCardsBlockProps = {
  heading: string;
  blockContent: string;
  cards: Array<{
    portfolioItem: PortfolioItemCard;
  }>;
};

const mapPortfolioItemToCards = (
  cards: Array<{
    portfolioItem: PortfolioItemCard;
  }>
) => {
  return cards.map((item) => ({
    heading: item.portfolioItem.title,
    image: item.portfolioItem.featuredImage.node,
    imageURL: item.portfolioItem.featuredImage.node.url,
    content: item.portfolioItem.excerpt,
    link: item.portfolioItem.uri,
  }));
};

const TwoCardsBlock = ({
  heading,
  blockContent,
  cards,
}: TwoCardsBlockProps) => (
  <Section>
    <Container>
      <Flex variant="spaceBetween" responsive>
        <Box width="34%">
          <BlockHeading>{heading}</BlockHeading>
          <BlockContent>
            {parse(blockContent, BlockContentOptions)}
          </BlockContent>
        </Box>
        <Box width="57%">
          <CardList cards={mapPortfolioItemToCards(cards)} />
        </Box>
      </Flex>
    </Container>
  </Section>
);

export default TwoCardsBlock;
