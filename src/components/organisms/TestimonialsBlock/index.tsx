import React from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import Carousel from 'components/molecules/Carousel';

import { theme } from 'theme/index';

type Testimonial = {
  companyLogo: {
    alt: string;
    url: string;
  };
  quote: string;
  authorName: string;
  authorRole: string;
};

type TestimonialBlockProps = {
  testimonials: Array<Testimonial>;
};

const TestimonialContainer = styled.figure`
  text-align: center;
  margin: 0;
`;

const TestimonialQuote = styled.blockquote`
  margin: 0;

  p {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: ${({ theme }) => theme.space[4]} 0 40px;
    font-size: 44px;
    line-height: ${({ theme }) => theme.lineHeights.tight};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    &::before {
      content: '“';
    }

    &::after {
      content: '"';
    }
  }
`;

const QuoteSource = styled.figcaption`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey};
`;

const getTestimonialSlides = (testimonials: Array<Testimonial>) => {
  const slidesArray = testimonials.map((testimonial) => {
    const { companyLogo, quote, authorName, authorRole } = testimonial;

    return (
      <TestimonialContainer>
        {companyLogo && <img alt={companyLogo.alt} src={companyLogo.url} />}
        <TestimonialQuote>
          <p>{quote}</p>
        </TestimonialQuote>
        <QuoteSource>
          {authorName}
          <br /> {authorRole}
        </QuoteSource>
      </TestimonialContainer>
    );
  });

  return slidesArray;
};

const TestimonialBlock = ({ testimonials }: TestimonialBlockProps) => (
  <Section background={theme.colors.sectionBackground}>
    <Container variant="tight">
      <Carousel slides={getTestimonialSlides(testimonials)} />
    </Container>
  </Section>
);

export default TestimonialBlock;
