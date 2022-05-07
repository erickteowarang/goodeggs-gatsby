import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { BlockHeading, BlockContent } from 'components/atoms/Typography';
import { CardProps } from 'components/atoms/Card';
import CardList from 'components/molecules/CardList';
import { BlockContentOptions } from 'components/generic';

type TwoCardsBlockProps = {
  heading: string;
  blockContent: string;
  cards: Array<CardProps>
};

const TwoCardsBlock = ({ heading, blockContent, cards }: TwoCardsBlockProps) => (
  <Section>
    <Container>
      <Flex variant="spaceBetween" responsive>
        <Box width="34%">
          <BlockHeading>
            {heading}
          </BlockHeading>
          <BlockContent>{parse(blockContent, BlockContentOptions)}</BlockContent>
        </Box>
        <Box width="57%">
          <CardList cards={cards} />
        </Box>
      </Flex>
    </Container>
  </Section>
);

export default TwoCardsBlock;
