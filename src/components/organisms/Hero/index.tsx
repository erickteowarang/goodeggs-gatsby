import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
import { CTAProps, GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, Heading } from 'components/atoms/Typography';
import { HTMLParserOptions } from 'components/utils';

import { theme } from 'theme/index'

type HeroProps = {
  id: string;
  heading: string;
  text: string;
  cta: CTAProps;
  image: GatsbyImageProps;
};

const HeroContent = styled(Text)`
  margin: ${({ theme }) => theme.space[4]} 0;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const Hero = ({ heading, text, cta, image }: HeroProps) => (
  <Section background={theme.colors.headerBackground}>
    <Container customWidth="1250px">
      <Flex variant="spaceBetween" responsive>
        <Box width="55%">
          <Heading as="h1" isLarge isHighlighted>
            {parse(heading, HTMLParserOptions)}
          </Heading>
          <HeroContent>{text}</HeroContent>
          {cta && (
            <Button url={cta.url} isLink>
              {cta.title}
            </Button>
          )}
        </Box>
        <Box width="40%">
          {image && (
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)!}
            />
          )}
        </Box>
      </Flex>
    </Container>
  </Section>
);

export default Hero;
