import React from 'react';
import styled, { css } from 'styled-components';
import Card, { CardProps } from 'components/atoms/Card';

import Flex from 'components/atoms/Flex';
import { media } from 'theme/media';

type CardListProps = {
  cards: Array<CardProps>;
  overflow?: boolean;
};

const CardListContainer = styled(Flex)<{ overflow?: boolean }>`
  ${({ overflow }) =>
    overflow
      ? css`
          flex-wrap: nowrap;
          overflow-x: auto;
          margin-top: 40px;

          > div {
            margin-right: 20px;
            flex: 0 0 300px;
          }
        `
      : css`
          margin-top: 20px;
        `}

  @media ${media.large} {
    ${({ overflow }) =>
      overflow
        ? css`
            > div {
              flex-basis: 370px;
            }
          `
        : css`
            > div:nth-child(2) {
              margin-top: ${({ theme }) => theme.space[6]};
            }
          `}
  }
`;

const CardList = ({ cards, overflow }: CardListProps) => (
  <CardListContainer
    variant={overflow ? undefined : 'spaceBetween'}
    alignItems="start"
    overflow={overflow}
  >
    {cards.map((card) => (
      <Card {...card} key={card.heading} />
    ))}
  </CardListContainer>
);

export default CardList;
