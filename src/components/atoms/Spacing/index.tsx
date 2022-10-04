import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'theme/media';

type SpacingProps = {
  size?: number;
  auto?: boolean;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
};

const StyledSpacing = styled.div<SpacingProps>`
  margin: ${({ theme, size, auto }) =>
    auto || !size ? 'auto' : theme.space[size]};

  ${({ mobileOnly }) =>
    mobileOnly &&
    css`
      @media ${media.small} {
        margin: auto;
      }
    `}

  ${({ desktopOnly }) =>
    desktopOnly &&
    css`
      margin: 0;

      @media ${media.large} {
        // @ts-ignore
        margin: ${({ theme, size }) => theme.space[size]};
      }
    `}
`;

const Spacing = ({ size, auto, mobileOnly, desktopOnly }: SpacingProps) => (
  <StyledSpacing size={size} auto={auto} mobileOnly={mobileOnly} desktopOnly={desktopOnly} />
);

export default Spacing;
