import * as React from 'react';

import Container from 'components/atoms/Container';
import Image from 'components/atoms/Image';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { GatsbyImageProps } from 'types/global';

type SingleImageBlockProps = {
  image: GatsbyImageProps;
};

const SingleImageBlock = ({
  image
}: SingleImageBlockProps) => (
  <Section smallPadding>
    <Container>
      <Flex variant="spaceBetween" alignItems="start">
        <Image
          image={image}
          style={{
            borderRadius: '20px',
          }}
        />
      </Flex>
    </Container>
  </Section>
);

export default SingleImageBlock;
