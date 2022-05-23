import React from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Heading } from 'components/atoms/Typography';
import { media } from 'theme/media';

type ContentFilterProps = {
  heading: string;
  filters: Array<string>;
  activeFilter: string;
  setActiveFilter: Function;
};

const FilterHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 42px;
  margin-bottom: 30px;

  @media ${media.medium} {
    font-size: 56px;
    margin-bottom: auto;
  }
`;

const FilterItem = styled.a<{
  isActive?: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text : theme.colors.mutedText};
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
  }

  @media ${media.medium} {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`;

const FilterContainer = styled(Flex)`
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  
  @media ${media.medium} {
    width: 500px;
    margin-top: 40px;
    padding: 0;
  }
`;

const ContentFilter = ({
  heading,
  filters,
  activeFilter,
  setActiveFilter,
}: ContentFilterProps) => (
  <Section>
    <Container variant="tight">
      <FilterHeading as="h1" align="center">
        {heading}
      </FilterHeading>
      <FilterContainer variant='spaceBetween'>
        {filters.map((filter) => (
          <FilterItem
            onClick={() => setActiveFilter(filter)}
            isActive={activeFilter === filter}
          >
            {filter}
          </FilterItem>
        ))}
      </FilterContainer>
    </Container>
  </Section>
);

export default ContentFilter;
