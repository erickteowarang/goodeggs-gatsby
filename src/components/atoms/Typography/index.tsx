import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../../theme/media';

type TypographyProps = {
  center?: boolean;
  bold?: boolean;
  isSmall?: boolean;
  isBlock?: boolean;
  isUppercase?: boolean;
};

type HeadingProps = TypographyProps & {
  isLarge?: boolean;
  isHighlighted?: boolean;
  isLight?: boolean;
  isExtraLarge?: boolean;
  align?: 'center' | 'right';
  noMarginBottom?: boolean;
};

export const Blockquote = styled.blockquote`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: ${({ theme }) => theme.space[4]};
`;

export const Text = styled.p<TypographyProps>`
  margin: 0;
  margin-bottom: ${({ theme, isSmall }) =>
    isSmall ? theme.space[2] : theme.space[3]};
  font-size: ${({ theme, isSmall }) =>
    isSmall ? theme.fontSizes[1] : theme.fontSizes[2]};
  font-weight: ${({ bold, theme }) =>
    bold ? theme.fontWeights.bold : theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.text};
  letter-spacing: ${({ theme }) => theme.letterSpacings.normal};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};

  ${({ isBlock }) =>
    isBlock &&
    css`
      color: ${({ theme }) => theme.colors.blockText};

      p:first-child {
        margin-top: 0;
      }
    `};

  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `};
`;

export const ServicesText = styled.p`
  margin: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.blockText};
  line-height: 1.25;
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export const Heading = styled.h2<HeadingProps>`
  margin: 0;
  color: ${({ theme, isLight }) =>
    isLight ? theme.colors.text : theme.colors.primary};
  margin-bottom: ${({ theme, noMarginBottom }) => noMarginBottom ? 0 : theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme, isLarge, isExtraLarge }) =>
    isExtraLarge 
    ? theme.fontSizes[8] 
    : isLarge 
    ? theme.fontSizes[6] 
    : theme.fontSizes[5]};
  font-weight: ${({ theme, isLight }) =>
    isLight ? theme.fontWeights.normal : theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      text-decoration-color: ${({ theme }) => theme.colors.highlight};

      u {
        text-decoration: none;
        display: inline-block;

        &::after {
          content: '';
          display: block;
          height: 8px;
          width: 98%;
          background: ${({ theme }) => theme.colors.highlight};
          margin-top: -5px;
        }
      }

      span {
        text-decoration-color: ${({ theme }) =>
          theme.colors.highlight} !important;
      }
    `}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};

  @media ${media.medium} {
    font-size: ${({ theme, isLarge, isExtraLarge }) =>
      isExtraLarge 
      ? theme.fontSizes[9] 
      :  isLarge 
        ? theme.fontSizes[8]
        : theme.fontSizes[6]
    };
  }
`;

export const BlockHeading = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.heading};

  @media ${media.medium} {
    margin-bottom: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const SmallHeading = styled.h5`
  color: ${({ theme }) => theme.colors.innerHeading};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

export const PortfolioHeading = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin-top: -8px;

  @media ${media.medium} {
    font-size: 45px;
  }
`;

export const BlockContent = styled.div`
  margin: ${({ theme }) => theme.space[3]} 0;

  p {
    color: ${({ theme }) => theme.colors.blockText};
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    margin-top: ${({ theme }) => theme.space[2]};
  }
`;
