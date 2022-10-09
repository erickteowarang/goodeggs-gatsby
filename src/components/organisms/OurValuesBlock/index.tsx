import * as React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Image from 'components/atoms/Image';
import Section from 'components/atoms/Section';
import { BlockHeading, BlockContent } from 'components/atoms/Typography';
import { BlockContentOptions } from 'components/generic';
import { GatsbyImageProps } from 'types/global';

type OurValuesBlockProps = {
  heading: string;
  values: string;
  image: GatsbyImageProps;
  imageLocation: 'left' | 'right';
};

const OurValuesBlock = ({ heading, image, imageLocation, values }: OurValuesBlockProps) => (
  <Section>
    <Container variant="blockContent">
      <Flex variant="spaceBetween" responsive>
        {image && imageLocation === 'left' && (
          <Box width="45%">
            <Image image={image} />
          </Box>
        )}
        <Box width="half">
          <BlockHeading>{heading}</BlockHeading>
          <BlockContent>{parse(values, BlockContentOptions)}</BlockContent>
        </Box>
        {image && imageLocation === 'right' && (
          <Box width="45%">
            <Image image={image} />
          </Box>
        )}
      </Flex>
    </Container>
  </Section>
);

export default OurValuesBlock;
