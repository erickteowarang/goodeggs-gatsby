import React from 'react';
import parse from 'html-react-parser';
import { CTAProps } from 'types/global';

import { Heading } from 'components/atoms/Typography';
import Section from 'components/atoms/Section';
import Flex from 'components/atoms/Flex';
import Container from 'components/atoms/Container';
import Link from 'components/atoms/Link';
import { CenteredContent, TrimParagraphOptions } from 'components/generic';
import Spacing from 'components/atoms/Spacing';

type TextBannerProps = {
  text: string;
  cta?: CTAProps;
};

const TextBanner = ({ text, cta }: TextBannerProps) => (
  <Section largePadding>
    <Container variant="narrow">
      <Flex variant="center">
        <Spacing size={2} mobileOnly />
        <Heading isHighlighted isLight align="center" as="h3" noMarginBottom>
          {parse(text, TrimParagraphOptions)}
        </Heading>
        {cta && (
          <CenteredContent>
            <Link href={cta.url}>{cta.title}</Link>
          </CenteredContent>
        )}
        <Spacing size={2} mobileOnly />
      </Flex>
    </Container>
  </Section>
);

export default TextBanner;
