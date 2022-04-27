import React from 'react';
import styled from 'styled-components';
import {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from 'html-react-parser';


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

export const HTMLParserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'p') {
      return <>{domToReact(domNode.children)}</>;
    }
  },
};
