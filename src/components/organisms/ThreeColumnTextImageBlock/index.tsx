import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Image from 'components/atoms/Image';
import Section from 'components/atoms/Section';
import { Text, ServicesText, PortfolioHeading } from 'components/atoms/Typography';
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
        <Box width="30%">
          <PortfolioHeading>{heading}</PortfolioHeading>
        </Box>
        <Box width="45%">
          <Text isBlock>{parse(mainContent)}</Text>
        </Box>
        <Box width="18%">
          <Text as="h4" bold>
            Services
          </Text>
          {servicesRendered.map((service) => (
            <ServicesText>{service.serviceType}</ServicesText>
          ))}
        </Box>
      </Flex>
    </Container>
    <Spacing size={5} />
    <Container>
      {blockImage && (
        <Image
          image={blockImage}
          style={{
            borderRadius: '20px',
          }}
        />
      )}
    </Container>
  </Section>
);

export default ThreeColumnTextImageBlock;
