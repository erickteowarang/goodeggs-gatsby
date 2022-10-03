import React from 'react';
import styled, { css } from 'styled-components';
import parse from 'html-react-parser';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CTAProps, GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import { Heading } from 'components/atoms/Typography';
import Section from 'components/atoms/Section';
import Flex from 'components/atoms/Flex';
import Container from 'components/atoms/Container';
import Link from 'components/atoms/Link';
import { TrimParagraphOptions } from 'components/generic';

type ColourBannerProps = {
  text: string;
  cta?: CTAProps;
  imageLocation?: string;
  backgroundColour?: string;
  image: GatsbyImageProps;
};

const ColourBannerContainer = styled(Container)<Partial<ColourBannerProps>>`
  padding: ${props => props.theme.space[7]} ${props => props.theme.space[5]};
  background: ${props => props.backgroundColour 
    ? props.backgroundColour 
    : props.theme.colors.altBackground
  };
  border-radius: 20px;
`;

const BannerImageContainer = styled.div<{ location?: 'left' | 'right' }>`
  ${props => props.location === 'left' ? 
    css`
      margin-right: ${props => props.theme.space[4]};
    `
    : css`
      margin-left: ${props => props.theme.space[4]};
    `}
`;

const BannerLink = styled(Link)`
  color: black;
`;

const ColourBanner = ({ text, cta, backgroundColour, imageLocation, image }: ColourBannerProps) => (
  <Section>
    <ColourBannerContainer 
      backgroundColour={backgroundColour}
    >
      <Flex alignItems="center">
        {imageLocation === 'left' && image && (
          <BannerImageContainer location={imageLocation}>
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)!}
            />
          </BannerImageContainer>
        )}
        <Box>
          <Heading isHighlighted isLight as="h3">
            {parse(text, TrimParagraphOptions)}
          </Heading>
          {cta && (
            <BannerLink href={cta.url}>{cta.title}</BannerLink>
          )}
        </Box>
        {imageLocation === 'right' && image && (
          <BannerImageContainer location={imageLocation}>
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)!}
            />
          </BannerImageContainer>
        )}
      </Flex>
    </ColourBannerContainer>
  </Section>
);

export default ColourBanner;
