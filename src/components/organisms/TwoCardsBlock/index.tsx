import * as React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { BlockHeading } from 'components/atoms/Typography';
import { CardProps } from 'components/molecules/Card';
import CardList from 'components/organisms/CardList';
import { BlockContentOptions } from 'components/utils';

type TwoCardsBlockProps = {
  heading: string;
  blockContent: string;
  cards: Array<CardProps>
};


const BlockContent = styled.div`
  margin: ${({ theme }) => theme.space[3]} 0;

  p {
    color: ${({ theme }) => theme.colors.blockText};
  }

  a {
    margin-top: ${({ theme }) => theme.space[2]};
  }
`;

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
