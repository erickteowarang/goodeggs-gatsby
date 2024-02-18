import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Card, { CardProps } from 'components/atoms/Card';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';

import { media } from 'theme/media';

const CardGridContainer = styled(Container)`
  margin-bottom: ${({ theme }) => theme.space[7]};

  > div {
    gap: 20px;
  }

  @media ${media.large} {
    > div {
      gap: 40px;
    }
  }
`;

const CardContainer = styled(motion.div)`
  width: 100%;

  @media ${media.small} {
    width: 31.2%;
  }
`;

const CardGrid = ({ cards }: { cards: Array<CardProps> }) => (
  <CardGridContainer>
    <Flex wrap>
      <AnimatePresence initial={false}>
        {cards.map((card, i) => (
          <CardContainer
            key={card.heading}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card key={i} {...card} fullWidth />
          </CardContainer>
        ))}
      </AnimatePresence>
    </Flex>
  </CardGridContainer>
);

export default CardGrid;
