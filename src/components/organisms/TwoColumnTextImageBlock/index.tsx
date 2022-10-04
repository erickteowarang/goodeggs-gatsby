import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Image from 'components/atoms/Image';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';

import { BlockHeading, BlockContent } from 'components/atoms/Typography';
import { BlockContentOptions } from 'components/generic';
import { GatsbyImageProps } from 'types/global';

type TwoColumnTextImageBlockProps = {
  heading: string;
  content: string;
  image: GatsbyImageProps;
};

const TwoColumnTextImageBlock = ({
  heading,
  content,
  image,
}: TwoColumnTextImageBlockProps) => (
  <Section>
    <Container variant="blockContent">
      <Flex variant="spaceBetween" responsive>
        <Box width="half">
          {image && (
            <Image
              image={image}
              style={{
                borderRadius: '20px',
              }}
            />
          )}
        </Box>
        <Spacing size={3} mobileOnly />
        <Box width="half">
          <BlockHeading>{heading}</BlockHeading>
          <BlockContent>{parse(content, BlockContentOptions)}</BlockContent>
        </Box>
      </Flex>
    </Container>
  </Section>
);

export default TwoColumnTextImageBlock;
