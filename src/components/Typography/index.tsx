import React from "react"
import styled, { css } from "styled-components"
import { media } from "../../theme/media"

type TypographyProps = {
  center?: boolean
  bold?: boolean
}

type HeadingProps = TypographyProps & {
  isLarge?: boolean
}

export const Blockquote = styled.blockquote`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: ${({ theme }) => theme.space[4]};
`

export const Text = styled.p<TypographyProps>`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ bold, theme }) => bold ? theme.fontWeights.bold : theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.text};
  letter-spacing: ${({ theme }) => theme.letterSpacings.normal};

  ${({ center }) => center && css`
    text-align: center;
  `};
`

export const Heading = styled.h2<HeadingProps>`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme, isLarge }) => isLarge ? theme.fontSizes[6] : theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};

  @media ${media.medium} {
    font-size: ${({ theme, isLarge }) => isLarge ? theme.fontSizes[7] : theme.fontSizes[6]};
  }
`