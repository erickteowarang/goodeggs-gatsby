import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'theme/media';

type SpacingProps = {
  size?: number;
  auto?: boolean;
  mobileOnly?: boolean;
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
`;

const Spacing = ({ size, auto, mobileOnly }: SpacingProps) => (
  <StyledSpacing size={size} auto={auto} mobileOnly={mobileOnly} />
);

export default Spacing;
