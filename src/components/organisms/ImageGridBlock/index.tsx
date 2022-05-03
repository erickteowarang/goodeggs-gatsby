import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, Heading, SmallHeading } from 'components/atoms/Typography';
import { GatsbyImageProps } from 'types/global';

type ImageGridBlockProps = {
  heading: string;
  content: string;
  gridImages: Array<{
    image: GatsbyImageProps
  }>
};

const ImageGridBlock = ({ 
  heading,
  content,
  gridImages 
}: ImageGridBlockProps) => (
  <Section>
    <Container variant='tight'>
        <Heading as="h1">
          {heading}
        </Heading>
        <Text>{content}</Text>
    </Container>
    <Container>
      {gridImages.map(singleImage => (
        <GatsbyImage
          alt={singleImage.image.alt}
          image={getImage(singleImage.image.gatsbyImageData)!}
        />
      ))}
    </Container>
  </Section>
);

export default ImageGridBlock;
