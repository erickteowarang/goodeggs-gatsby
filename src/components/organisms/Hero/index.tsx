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
import Spacing from 'components/atoms/Spacing';
import { Text, Heading } from 'components/atoms/Typography';
import { TrimParagraphOptions } from 'components/generic';

import { theme } from 'theme/index';

type HeroProps = {
  heading: string;
  text: string;
  cta: CTAProps;
  image: GatsbyImageProps;
  wideLayout: boolean;
  backgroundColor: string;
};

const HeroContent = styled(Text)`
  margin: 14px 0 ${({ theme }) => theme.space[4]};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const HeroImageContainer = styled.div`
  position: absolute;
  bottom: -50%;
`;

const Hero = ({ 
  heading,
  text,
  cta,
  image,
  wideLayout,
  backgroundColor 
}: HeroProps) => (
  <>
    <Section
      background={
        wideLayout && backgroundColor 
          ? backgroundColor
          : theme.colors.headerBackground
      }
    >
      <Container customWidth="1250px">
        <Flex variant="spaceBetween" responsive>
          {wideLayout ? (
            <Box 
              width="100%"
              center
              relative
              height="580px"
            >
              <Heading as="h1" isExtraLarge>
                {parse(heading, TrimParagraphOptions)}
              </Heading>
              <HeroContent>{text}</HeroContent>
              {cta && (
                <Button url={cta.url} isLink>
                  {cta.title}
                </Button>
              )}
              {image && (
                <HeroImageContainer>
                  <GatsbyImage
                    alt={image.alt}
                    image={getImage(image.gatsbyImageData)!}
                  />
                </HeroImageContainer>
              )}
            </Box>
          ) : (
            <>
              <Box width="55%">
                <Heading as="h1" isLarge isHighlighted>
                  {parse(heading, TrimParagraphOptions)}
                </Heading>
                <HeroContent>{text}</HeroContent>
                {cta && (
                  <Button url={cta.url} isLink>
                    {cta.title}
                  </Button>
                )}
              </Box>
              <Spacing size={3} mobileOnly />
              <Box width="42%">
                {image && (
                  <GatsbyImage
                    alt={image.alt}
                    image={getImage(image.gatsbyImageData)!}
                  />
                )}
              </Box>
            </>
          )}
        </Flex>
      </Container>
    </Section>
    {wideLayout && <Spacing size={10} />}
  </>
);

export default Hero;
