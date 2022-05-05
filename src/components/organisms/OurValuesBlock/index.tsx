import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { BlockHeading, BlockContent } from 'components/atoms/Typography';
import { BlockContentOptions } from 'components/generic';
import { GatsbyImageProps } from 'types/global';


type OurValuesBlockProps = {
  heading: string;
  values: string;
  image: GatsbyImageProps
};


const OurValuesBlock = ({ heading, image, values }: OurValuesBlockProps) => (
  <Section>
    <Container>
      <Flex variant="spaceBetween" responsive>
        <Box width="45%">
          <BlockHeading>
            {heading}
          </BlockHeading>
          {image && (
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)!}
            />
          )}
        </Box>
        <Box width="half">
          <BlockContent>{parse(values, BlockContentOptions)}</BlockContent>
        </Box>
        
      </Flex>
    </Container>
  </Section>
);

export default OurValuesBlock;
