import React from 'react';
import styled from 'styled-components';
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from 'html-react-parser';
import { CTAProps } from 'types/global';

import { Heading } from 'components/atoms/Typography';

type TextBannerProps = {
  text: string;
  cta?: CTAProps;
};

const TextBanner = ({ text, cta }: TextBannerProps) => <></>;

export default TextBanner;
