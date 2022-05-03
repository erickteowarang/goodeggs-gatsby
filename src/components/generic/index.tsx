import React from 'react';
import styled from 'styled-components';
import {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from 'html-react-parser';

import { SmallHeading, Text } from "components/atoms/Typography";
import Link from "components/atoms/Link";

export const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const InteractiveIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 48;
  height: 48;
`;


export const CenteredContent = styled.div`
  text-align: center;
`

export const TrimParagraphOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'p') {
      return <>{domToReact(domNode.children)}</>;
    }
  },
};

export const BlockContentOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) { 
      if (domNode.name === 'p') {
        return <Text>{domToReact(domNode.children, BlockContentOptions)}</Text>;
      } else if (domNode.name === 'a') {
        return <Link>{domToReact(domNode.children)}</Link>;
      } else if (domNode.name === 'h5' || domNode.name === 'h6') {
        return <SmallHeading as={domNode.name}>{domToReact(domNode.children)}</SmallHeading>;
      }
    }
  },
};