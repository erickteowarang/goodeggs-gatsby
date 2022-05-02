import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GatsbyImageProps } from 'types/global';

import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, Heading } from 'components/atoms/Typography';

type MainBannerProps = {
  heading: string;
  subtitle: string;
  bannerImage: GatsbyImageProps;
};

const MainBanner = ({ heading, subtitle, bannerImage }: MainBannerProps) => (
  <Section>
    <Container>
      <Flex variant="columnStart">
        <Heading as="h1">
          {heading}
        </Heading>
        <Text>{subtitle}</Text>
        {bannerImage && (
          <GatsbyImage
            alt={bannerImage.alt}
            image={getImage(bannerImage.gatsbyImageData)!}
          />
        )}
      </Flex>
    </Container>
  </Section>
);

export default MainBanner;
