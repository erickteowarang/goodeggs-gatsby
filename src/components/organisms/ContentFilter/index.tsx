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
}

const FilterItem = styled.a<{
  isActive?: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme, isActive }) => isActive ? theme.colors.text : theme.colors.mutedText};
`

const ContentFilter = ({
  heading,
  filters,
  activeFilter,
  setActiveFilter,
}: ContentFilterProps) => (
  <Section>
    <Heading as="h1" center>
      {heading}
    </Heading>
    <Container variant='narrow'>
      <Flex variant='spaceBetween'>
        {filters.map(filter => {
          <FilterItem 
            onClick={() => setActiveFilter(filter)} 
            isActive={activeFilter === filter}
          >
            {filter}
          </FilterItem>
        })}
      </Flex>
    </Container>
  </Section>
);

export default ContentFilter;
