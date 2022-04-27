import React from 'react';
import styled from 'styled-components';
import parse, {
    domToReact,
    HTMLReactParserOptions,
    Element,
} from 'html-react-parser';
import { CTAProps } from 'types/global';

type TextBannerProps = {
    text: string;
    cta?: CTAProps;
};

const TextBanner = ({ text, cta }: TextBannerProps) => (
    <>
        {console.log(text)}
        {console.log(cta)}
    </>
);

export default TextBanner;
