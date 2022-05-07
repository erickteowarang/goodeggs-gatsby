import React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from 'components/atoms/Card';

import Flex from 'components/atoms/Flex';

const CardListContainer = styled(Flex)`
  > div:nth-child(2) {
    margin-top: ${({ theme }) => theme.space[6]};
  }
`

const CardList = ({
  cards
}: {
  cards: Array<CardProps>
}) => (
  <CardListContainer variant='spaceBetween' alignItems='start'>
    {cards.map(card => (
      <Card {...card} key={card.heading} />
    ))}
  </CardListContainer>
);

export default CardList;