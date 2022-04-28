import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import { GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { BlockHeading } from 'components/atoms/Typography';
import { BlockContentOptions } from 'components/utils';

type TwoCardsBlockProps = {
  heading: string;
  blockContent: string;
  cards: Array<{
    cardImage: GatsbyImageProps
    cardHeading: string
    cardContent: string
  }>
};


const BlockContent = styled.div`
  margin: ${({ theme }) => theme.space[3]} 0;

  p {
    color: ${({ theme }) => theme.colors.blockText};
  }

  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.linkBlue};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-top: ${({ theme }) => theme.space[2]};
  }
`;

const TwoCardsBlock = ({ heading, blockContent, cards }: TwoCardsBlockProps) => (
  <Section>
    <Container>
      <Flex variant="spaceBetween" responsive>
        <Box width="40%">
          <BlockHeading>
            {heading}
          </BlockHeading>
          <BlockContent>{parse(blockContent, BlockContentOptions)}</BlockContent>
        </Box>
        <Box width="50%">
          {cards.map(card => (
            <p>
              <h2>{card.cardHeading}</h2>
              {card.cardImage && (
                <GatsbyImage
                  alt={card.cardImage.alt}
                  image={getImage(card.cardImage.gatsbyImageData)!}
                />
              )}
              <span>{card.cardContent}</span>
            </p>
          ))}
        </Box>
      </Flex>
    </Container>
  </Section>
);

export default TwoCardsBlock;
