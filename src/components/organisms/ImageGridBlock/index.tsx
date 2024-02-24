import * as React from 'react';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Image from 'components/atoms/Image';
import Section from 'components/atoms/Section';
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
  gridImages,
}: ImageGridBlockProps) => (
  <Section smallPadding>
    {/* <Container variant="tight">
      <BlockHeading>{heading}</BlockHeading>
      <Text isBlock>{parse(content)}</Text>
    </Container> */}
    <Spacing size={5} />
    <Container>
      <Flex variant="spaceBetween" gap={4}>
        {gridImages.map((singleImage, index) => {
          if (gridImages.length === 4) {
            if (index === 2 || index === 3) {
              return (
                <Box width="half">
                  <Image
                    image={singleImage.image}
                    style={{
                      borderRadius: '20px',
                      maxWidth:'100%',
                    }}
                  />
                </Box>
              )
            }
          }

          return (
            <Image
              image={singleImage.image}
              style={{
                borderRadius: '20px',
                maxWidth:'100%',
              }}
            />
          )
          })}
      </Flex>
    </Container>
    <Spacing size={5} />
  </Section>
);

export default ImageGridBlock;
