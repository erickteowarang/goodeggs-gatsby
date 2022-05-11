import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, PortfolioHeading } from 'components/atoms/Typography';
import { TrimParagraphOptions } from 'components/generic';
import { GatsbyImageProps } from 'types/global';
import Spacing from 'components/atoms/Spacing';

type ThreeColumnTextImageBlockProps = {
  heading: string;
  mainContent: string;
  servicesRendered: Array<{
    serviceType: string;
  }>;
  blockImage: GatsbyImageProps;
};

const ThreeColumnTextImageBlock = ({
  heading,
  mainContent,
  servicesRendered,
  blockImage,
}: ThreeColumnTextImageBlockProps) => (
  <Section smallPadding>
    <Container variant="narrow">
      <Flex variant="spaceBetween" alignItems="start">
        <Box width="33.3%">
          <PortfolioHeading>{heading}</PortfolioHeading>
        </Box>
        <Box width="35%">
          <Text isBlock>{parse(mainContent)}</Text>
        </Box>
        <Box width="20%">
          <Text as="h4" bold>
            Services
          </Text>
          {servicesRendered.map((service) => (
            <Text isBlock>{service.serviceType}</Text>
          ))}
        </Box>
      </Flex>
    </Container>
    <Spacing size={5} />
    <Container>
      {blockImage && (
        <GatsbyImage
          alt={blockImage.alt}
          image={getImage(blockImage.gatsbyImageData)!}
        />
      )}
    </Container>
  </Section>
);

export default ThreeColumnTextImageBlock;
