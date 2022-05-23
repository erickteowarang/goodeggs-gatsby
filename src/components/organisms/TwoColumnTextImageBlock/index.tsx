import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
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
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)!}
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
