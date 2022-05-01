import React, { ReactNode, ElementType } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'theme/media';

type BoxWidthOptions =
  | 'full'
  | 'half'
  | 'quarter'
  | 'third'
  | 'fitContent'
  | string;

type BoxProps = {
  as?: ElementType
  width?: BoxWidthOptions;
  background?: string;
  padding?: number;
  paddingY?: number;
  radius?: 'button' | 'large' | 'circle';
  center?: boolean;
  order?: 0 | 1 | 2 | 3;
  children: ReactNode;
};

const getBoxWidth = (width?: BoxWidthOptions) => {
  let calcWidth;
  switch (width) {
    case 'full':
      calcWidth = '100%';
    case 'half':
      calcWidth = '50%';
    case 'quarter':
      calcWidth = '25%';
    case 'third':
      calcWidth = '33.3333%';
    case 'fitContent':
      calcWidth = 'fit-content';
    default:
      calcWidth = width;
  }

  return css`
    width: 100%;
    @media ${media.small} {
      width: ${calcWidth};
    }
  `;
};

const StyledBox = styled.div<BoxProps>`
  ${({ width }) => getBoxWidth(width)};

  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${({ theme }) => theme.space[padding]};
    `}

  ${({ paddingY }) =>
    paddingY &&
    css`
      padding-top: ${({ theme }) => theme.space[paddingY]};
      padding-bottom: ${({ theme }) => theme.space[paddingY]};
    `}

  ${({ radius }) =>
    radius &&
    css`
      overflow: hidden;
      border-radius: ${({ theme }) => theme.radii[radius]};
    `}

  ${({ center }) =>
    center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}

  ${({ order }) =>
    order &&
    css`
      @media ${media.small} {
        order: ${order};
      }
    `}
`;

const Box = ({
  as,
  width = 'full',
  background,
  padding,
  paddingY,
  radius,
  center = false,
  order,
  children,
  ...props
}: BoxProps) => {
  return (
    <StyledBox
      as={as}
      width={width}
      background={background}
      padding={padding}
      paddingY={paddingY}
      radius={radius}
      center={center}
      order={order}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
