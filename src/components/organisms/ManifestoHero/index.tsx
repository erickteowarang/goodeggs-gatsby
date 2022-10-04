import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImageProps } from 'types/global';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Image from 'components/atoms/Image';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { Text, Heading } from 'components/atoms/Typography';
import { media } from 'theme/media';

type ManifestoHeroProps = {
  heading: string;
  subtitle: string;
  image: GatsbyImageProps;
};

const HeroTitle = styled(Heading)`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroSubtitle = styled(Text)`
  margin: ${({ theme }) => theme.space[4]} 0;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const HeroDivider = styled.hr`
  height: 4px;
  background: #eeeeee;
  border: none;
  margin-top: ${({ theme }) => theme.space[3]};

  @media ${media.medium} {
    margin-top: ${({ theme }) => theme.space[5]};
  }
`;

const ManifestoHero = ({ heading, subtitle, image }: ManifestoHeroProps) => (
  <Section smallPadding>
    <Container customWidth="1190px">
      <Flex variant="spaceBetween" responsive>
        <Box width="55%">
          {image && (
            <Image image={image} />
          )}
        </Box>
        <Spacing size={4} mobileOnly />
        <Box width="40%">
          <HeroTitle as="h1">{heading}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
        </Box>
      </Flex>
      <HeroDivider />
    </Container>
  </Section>
);

export default ManifestoHero;
