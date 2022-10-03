import * as React from 'react';
import parse from 'html-react-parser';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, BlockHeading } from 'components/atoms/Typography';
import { GatsbyImageProps } from 'types/global';
import Spacing from 'components/atoms/Spacing';

type ImageGridBlockProps = {
  heading: string;
  content: string;
  gridImages: Array<{
    image: GatsbyImageProps;
  }>;
};

const ImageGridBlock = ({
  heading,
  content,
  gridImages,
}: ImageGridBlockProps) => (
  <Section smallPadding>
    <Container variant="tight">
      <BlockHeading>{heading}</BlockHeading>
      <Text isBlock>{parse(content)}</Text>
    </Container>
    <Spacing size={5} />
    <Container>
      <Flex variant="spaceBetween" gap={4}>
        {gridImages.map((singleImage) => (
          <GatsbyImage
            alt={singleImage.image.alt}
            image={getImage(singleImage.image.gatsbyImageData)!}
            style={{
              borderRadius: '20px',
            }}
          />
        ))}
      </Flex>
    </Container>
    <Spacing size={5} />
  </Section>
);

export default ImageGridBlock;
