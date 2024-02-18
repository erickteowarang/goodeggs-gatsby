import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled, { css, ThemeProps } from 'styled-components';
import { headerHeight } from 'components/organisms/Header';
import { media } from 'theme/media';
import { CustomThemeProps } from 'theme/index';

type SectionProps = {
  background?: string;
  largePadding?: boolean;
  smallPadding?: boolean;
  children: ReactNode;
};

const getPadding = (
  theme: CustomThemeProps,
  isSmall?: boolean,
  isLarge?: boolean
) => {
  if (isLarge) {
    return theme.space[7];
  } else if (isSmall) {
    return theme.space[4];
  }

  return theme.space[6];
};

const StyledSection = styled.section<SectionProps>`
  padding-top: 20px;
  padding-bottom: 20px;

  &:first-of-type {
    padding-top: calc(40px + ${headerHeight});
  }

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}

  @media ${media.small} {
    padding-top: ${({ theme }) => theme.space[5]};
    padding-bottom: ${({ theme }) => theme.space[5]};

    &:first-of-type {
      padding-top: calc(${({ theme }) => theme.space[5]} + ${headerHeight});
    }
  }

  @media ${media.large} {
    padding-top: ${({ theme, largePadding, smallPadding }) =>
      getPadding(theme, smallPadding, largePadding)};
    padding-bottom: ${({ theme, largePadding, smallPadding }) =>
      getPadding(theme, smallPadding, largePadding)};

    &:first-of-type {
      padding-top: calc(
        ${({ theme, largePadding, smallPadding }) =>
            getPadding(theme, smallPadding, largePadding)} + ${headerHeight}
      );
    }
  }
`;

const Section = ({
  background,
  children,
  largePadding,
  smallPadding,
}: SectionProps) => (
  <StyledSection
    background={background}
    largePadding={largePadding}
    smallPadding={smallPadding}
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </StyledSection>
);

export default Section;
