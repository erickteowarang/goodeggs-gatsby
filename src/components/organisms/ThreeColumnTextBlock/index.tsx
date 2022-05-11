import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, BlockHeading } from 'components/atoms/Typography';
import { theme } from 'theme/index';

type ThreeColumnTextBlockProps = {
  heading: string;
  sectionBackground?: 'grey' | 'white';
  textBlocks: Array<{
    blockHeading: string;
    blockContent: string;
  }>;
};

const ThreeColumnTextImageBlock = ({
  heading,
  sectionBackground,
  textBlocks,
}: ThreeColumnTextBlockProps) => (
  <Section
    background={
      sectionBackground === 'grey' ? theme.colors.sectionBackground : '#FFFFFF'
    }
  >
    <Container>
      <BlockHeading>{heading}</BlockHeading>
      <Flex variant="spaceBetween" alignItems="start">
        {textBlocks.map((block) => (
          <Box width="third">
            <Text as="h6" bold>
              {block.blockHeading}
            </Text>
            <Text isBlock>{parse(block.blockContent)}</Text>
          </Box>
        ))}
      </Flex>
    </Container>
  </Section>
);

export default ThreeColumnTextImageBlock;
