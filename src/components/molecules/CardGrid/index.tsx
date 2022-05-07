import React from 'react';

import Card, { CardProps } from 'components/atoms/Card';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';

const CardGrid = ({ 
  cards 
}: {
  cards: Array<CardProps>;
}) => (
  <Section>
    <Container>
      <Flex variant='spaceBetween'>
        {cards.map(card => (
          <Card {...card} />
        ))}
      </Flex>
    </Container>
  </Section>
);

export default CardGrid;