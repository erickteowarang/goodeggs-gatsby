import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { BlockHeading, BlockContent } from 'components/atoms/Typography';
import { BlockContentOptions } from 'components/generic';

type TwoColumnTextBlockProps = {
  textBlocks: Array<{
    blockHeading: string
    blockContent: string
  }>
};

const TwoColumnTextBlock = ({ textBlocks }: TwoColumnTextBlockProps) => (
  <Section>
    <Container variant='blockContent'>
      <Flex variant="spaceBetween" alignItems='start' responsive>
        {textBlocks.map((block, index) => (
          <Box width={index === 0 ? '35%' : '60%'}>
            <BlockHeading>
              {block.blockHeading}
            </BlockHeading>
            <BlockContent>{parse(block.blockContent, BlockContentOptions)}</BlockContent>
          </Box>
        ))}
      </Flex>
    </Container>
  </Section>
);

export default TwoColumnTextBlock;
