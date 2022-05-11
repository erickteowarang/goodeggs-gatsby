import React from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Heading } from 'components/atoms/Typography';

type ContentFilterProps = {
  heading: string;
  filters: Array<string>;
  activeFilter: string;
  setActiveFilter: Function;
};

const FilterHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 56px;
`;

const FilterItem = styled.a<{
  isActive?: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: bold;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text : theme.colors.mutedText};
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
  }
`;

const FilterContainer = styled(Flex)`
  width: 500px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
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
      <FilterContainer variant="spaceBetween">
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
