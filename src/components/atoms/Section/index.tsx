import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { headerHeight } from 'components/organisms/Header';
import { media } from 'theme/media';

type SectionProps = {
  background?: string
  largePadding?: boolean
  children: ReactNode
};

const StyledSection = styled.section<SectionProps>`
  padding-top: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[5]};

  &:first-of-type {
    padding-top: calc(${({ theme }) => theme.space[4]} + ${headerHeight});
  }

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}

  @media ${media.small} {
    padding-top: ${({ theme, largePadding }) => largePadding ? theme.space[7] : theme.space[6]};
    padding-bottom: ${({ theme, largePadding }) => largePadding ? theme.space[7] : theme.space[6]};

    &:first-of-type {
      padding-top: calc(${({ theme }) => theme.space[6]} + ${headerHeight});
    }
  }
`;

const Section = ({ background, children, largePadding }: SectionProps) => (
  <StyledSection 
    background={background}
    largePadding={largePadding}
  >
    {children}
  </StyledSection>
);

export default Section;
