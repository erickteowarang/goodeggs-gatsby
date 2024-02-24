import * as React from 'react';
import parse from 'html-react-parser';

import Container from 'components/atoms/Container';
import Section from 'components/atoms/Section';
import { Text, BlockHeading } from 'components/atoms/Typography';
import Spacing from 'components/atoms/Spacing';

type HeadingTextBlockProps = {
  heading: string;
  content: string;
};

const HeadingTextBlock = ({
  heading,
  content,
}: HeadingTextBlockProps) => (
  <Section smallPadding>
    <Container variant="tight">
      <BlockHeading>{heading}</BlockHeading>
      <Text isBlock>{parse(content)}</Text>
    </Container>
    <Spacing size={5} desktopOnly />
    <Spacing size={1} mobileOnly />
  </Section>
);

export default HeadingTextBlock;
