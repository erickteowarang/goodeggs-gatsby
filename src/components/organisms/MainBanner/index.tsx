import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { Text, Heading } from 'components/atoms/Typography';

type MainBannerProps = {
  heading: string;
  subtitle: string;
  bannerImage: GatsbyImageProps;
};

const MainHeading = styled(Heading)`
  font-size: 55px;
  color: ${({ theme }) => theme.colors.text};
`;

const MainBanner = ({ heading, subtitle, bannerImage }: MainBannerProps) => (
  <Section>
    <Container>
      <Flex variant="center">
        <Box width="40%">
          <MainHeading as="h1">{heading}</MainHeading>
          <Text isBlock>{subtitle}</Text>
        </Box>
      </Flex>
      <Spacing size={6} />
      {bannerImage && (
        <GatsbyImage
          alt={bannerImage.alt}
          image={getImage(bannerImage.gatsbyImageData)!}
        />
      )}
    </Container>
  </Section>
);

export default MainBanner;
