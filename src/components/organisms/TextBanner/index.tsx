import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { CTAProps } from 'types/global';

import { Heading } from 'components/atoms/Typography';
import Section from 'components/atoms/Section';
import Flex from 'components/atoms/Flex';
import Container from 'components/atoms/Container';
import { HTMLParserOptions } from 'components/utils';

type TextBannerProps = {
  text: string;
  cta?: CTAProps;
};

const TextBanner = ({ text, cta }: TextBannerProps) => (
  <Section largePadding>
    <Container variant='narrow'>
      <Flex variant='center'>
        <Heading 
          isHighlighted
          isLight
          align='center'
          as='h3'
        >
          {parse(text, HTMLParserOptions)}
        </Heading>
        {cta && <>
            <p>{cta.title}</p>
          </>
        }
      </Flex>
    </Container>
  </Section>
);

export default TextBanner;
