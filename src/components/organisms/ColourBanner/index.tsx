import React from 'react';
import styled, { css } from 'styled-components';
import parse from 'html-react-parser';
import { CTAProps, GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import Image from 'components/atoms/Image';
import { Heading } from 'components/atoms/Typography';
import Section from 'components/atoms/Section';
import Flex from 'components/atoms/Flex';
import Spacing from 'components/atoms/Spacing';
import Container from 'components/atoms/Container';
import Link from 'components/atoms/Link';
import { TrimParagraphOptions } from 'components/generic';

import { media } from 'theme/media';

type ColourBannerProps = {
  text: string;
  cta?: CTAProps;
  imageLocation?: string;
  backgroundColour?: string;
  image: GatsbyImageProps;
  wideVersion?: string;
};

const ColourBannerContainer = styled(Container)<Partial<ColourBannerProps>>`
  padding: ${props => props.theme.space[5]} ${props => props.theme.space[4]};
  background: ${props => props.backgroundColour 
      ? props.backgroundColour 
      : props.theme.colors.altBackground
    };
  margin-bottom: ${props => props.theme.space[5]};

  @media ${media.large} {
    padding: ${props => props.wideVersion 
      ? css`
        ${props => props.theme.space[3]}
        0
        ${props => props.theme.space[3]}
        ${props => props.theme.space[5]}`
      : css`${props => props.theme.space[6]} ${props => props.theme.space[5]}`}; 
    border-radius: 20px;
    margin-bottom: ${props => props.theme.space[7]};
  }
`;

const BannerImageContainer = styled(Box)<{ location?: 'left' | 'right' }>`
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

const ColourBanner = ({ text, cta, backgroundColour, imageLocation, image, wideVersion }: ColourBannerProps) => (
  <Section>
    <ColourBannerContainer
      wideVersion={wideVersion}
      backgroundColour={backgroundColour}
    >
      <Flex alignItems="center" responsive>
        {imageLocation === 'left' && image && (
          <BannerImageContainer 
            width={wideVersion ? "auto" : "30%"}
            location={imageLocation}
          >
            <Image image={image} />
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
          <BannerImageContainer width={wideVersion ? "auto" : "65%"} location={imageLocation}>
            <Image image={image} />
          </BannerImageContainer>
        )}
      </Flex>
    </ColourBannerContainer>

    <Spacing size={5} mobileOnly />
  </Section>
);

export default ColourBanner;
