import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../../theme/media';

type SectionProps = {
  background?: string
  children: ReactNode;
};

const StyledSection = styled.section<SectionProps>`
  padding-top: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}

  @media ${media.small} {
    padding-top: ${({ theme }) => theme.space[5]};
    padding-bottom: ${({ theme }) => theme.space[5]};
  }
`;

const Section = ({ background, children }: SectionProps) => (
  <StyledSection background={background}>{children}</StyledSection>
);

export default Section;
