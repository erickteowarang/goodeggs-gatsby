import React from 'react';
import styled from 'styled-components';

import Button from 'components/atoms/Button';
import Flex from 'components/atoms/Flex';
import { Heading } from 'components/atoms/Typography';
import { CTAProps } from 'types/global';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';

const CtaHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 36px;
  line-height: ${({ theme }) => theme.lineHeights.heading};

  @media ${media.medium} {
    margin-right: ${({ theme }) => theme.space[3]};
  }
`;

const CtaBlockContainer = styled.div`
  padding-top: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};

  @media ${media.medium} {
    padding-top: ${({ theme }) => theme.space[6]};
    padding-bottom: ${({ theme }) => theme.space[5]};
  }
`;

const CtaBlock = ({
  heading,
  ctaLink,
}: {
  heading: string;
  ctaLink: CTAProps;
}) => (
  <CtaBlockContainer>
    <Container>
      <Flex variant="center">
        <CtaHeading>{heading}</CtaHeading>
        <Button isLink url={ctaLink.url}>
          {ctaLink.title}
        </Button>
      </Flex>
    </Container>
  </CtaBlockContainer>
);

export default CtaBlock;
