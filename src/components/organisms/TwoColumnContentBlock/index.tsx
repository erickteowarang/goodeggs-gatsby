import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Image from 'components/atoms/Image';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import Spacing from 'components/atoms/Spacing';
import { Text, BlockHeading } from 'components/atoms/Typography';
import { theme } from 'theme/index';
import { GatsbyImageProps } from 'types/global';

type TwoColumnContentBlockProps = {
  heading: string;
  sectionBackground?: 'grey' | 'white';
  contentBlocks: Array<{
    blockHeading: string;
    blockContent: string;
    image: GatsbyImageProps;
    imageLocation: string;
  }>;
};

const TwoColumnContentBlock = ({
  heading,
  sectionBackground,
  contentBlocks,
}: TwoColumnContentBlockProps) => (
  <Section
    background={
      sectionBackground === 'grey' ? theme.colors.sectionBackground : '#FFFFFF'
    }
  >
    <Container>
      <BlockHeading>{heading}</BlockHeading>
      <Spacing size={5} />
      <Flex variant="spaceBetween" alignItems="start">
        {contentBlocks.map((block) => (
          <Box width="45%">
            <Flex variant="spaceBetween" alignItems="start">
              {block.image && block.imageLocation === 'left' && (
                <Box width="30%">
                  <Image image={block.image} />
                </Box>
              )}
              <Box width="65%">
                <Text as="h6" bold>
                  {block.blockHeading}
                </Text>
                <Text isBlock>{parse(block.blockContent)}</Text>
              </Box>
              {block.image && block.imageLocation === 'right' && (
                <Box width="25%">
                  <Image image={block.image} />
                </Box>
              )}
            </Flex>
            <Spacing size={5} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Section>
);

export default TwoColumnContentBlock;
