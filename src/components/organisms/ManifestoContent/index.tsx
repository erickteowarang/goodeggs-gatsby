import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import { TrimParagraphOptions } from 'components/utils';


const ContentContainer = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.blockText};
`

const NextLinkContainer = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.sizes[2]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 37px;
`

const ManifestoContent = ({
  content,
  nextPageLink,
}: {
  content: string
  nextPageLink: {
    title: string
    link: string
  }
}) => (
  <Section>
    <Container variant='tight'>
      <ContentContainer>
        {parse(content, TrimParagraphOptions)}
      </ContentContainer>

      <NextLinkContainer>
        <b>Next: </b><a href={nextPageLink.link}>{nextPageLink.title}</a>
      </NextLinkContainer>
    </Container>
  </Section>
)

export default ManifestoContent;