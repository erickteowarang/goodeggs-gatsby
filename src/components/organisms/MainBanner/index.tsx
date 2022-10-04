import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Image from 'components/atoms/Image';
import Section from 'components/atoms/Section';
import { Text, Heading } from 'components/atoms/Typography';
import { media } from 'theme/media';

type MainBannerProps = {
  heading: string;
  subtitle: string;
  bannerImage: GatsbyImageProps;
};

const MainHeading = styled(Heading)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.text};

  @media ${media.medium} {
    font-size: 55px;
  }
`;

const BannerSpacing = styled.div`
  margin: ${({ theme }) => theme.space[4]};

  @media ${media.medium} {
    margin: ${({ theme }) => theme.space[5]};
  }

  @media ${media.large} {
    margin: ${({ theme }) => theme.space[6]};
  }
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
      <BannerSpacing />
      {bannerImage && (
        <Image
          image={bannerImage}
          style={{
            borderRadius: '20px',
          }}
        />
      )}
    </Container>
  </Section>
);

export default MainBanner;
