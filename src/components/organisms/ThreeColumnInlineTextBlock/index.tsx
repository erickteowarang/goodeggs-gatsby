import * as React from 'react';
import parse from 'html-react-parser';

import Box from 'components/atoms/Box';
import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Section from 'components/atoms/Section';
import { Text, ServicesText, PortfolioHeading } from 'components/atoms/Typography';
import { GatsbyImageProps } from 'types/global';
import Spacing from 'components/atoms/Spacing';

type ThreeColumnInlineTextBlockProps = {
  heading: string;
  mainContent: string;
  servicesRendered: Array<{
    serviceType: string;
  }>;
  blockImage: GatsbyImageProps;
};

const ThreeColumnInlineTextBlock = ({
  heading,
  mainContent,
  servicesRendered,
}: ThreeColumnInlineTextBlockProps) => (
  <Section smallPadding>
    <Container variant="narrow">
      <Flex variant="spaceBetween" alignItems="start">
        <Box width="29%">
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
  </Section>
);

export default ThreeColumnInlineTextBlock;
