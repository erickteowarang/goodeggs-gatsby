import * as React from 'react';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Image from 'components/atoms/Image';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { GatsbyImageProps } from 'types/global';

type TwoColumnImageBlockProps = {
  componentImages: Array<{
    image: GatsbyImageProps;
  }>;
};

const TwoColumnContentBlock = ({
  componentImages
}: TwoColumnImageBlockProps) => (
  <Section smallPadding>
    <Container>
      <Flex variant="spaceBetween" alignItems="start">
        {componentImages.map((singleImage, index) => (
          <Box width="half">
            <Image
            image={singleImage.image}
            style={{
              borderRadius: '20px',
              }}
            />
          </Box>
        ))}
      </Flex>
    </Container>
  </Section>
);

export default TwoColumnContentBlock;
