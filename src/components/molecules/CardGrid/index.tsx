import React from 'react';
import styled from 'styled-components';

import Box from 'components/atoms/Box';
import Card, { CardProps } from 'components/atoms/Card';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';

const CardGridContainer = styled(Container)`
  margin-bottom: ${({ theme }) => theme.space[7]};
`

const CardGrid = ({ 
  cards 
}: {
  cards: Array<CardProps>;
}) => (
  <CardGridContainer>
    <Flex variant='spaceBetween'>
      {cards.map(card => (
        <Box width='third'>
          <Card {...card} />
        </Box>
      ))}
    </Flex>
  </CardGridContainer>
);

export default CardGrid;