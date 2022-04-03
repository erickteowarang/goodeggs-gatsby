import React, { ReactNode } from "react"
import styled, { css } from "styled-components"
import { media } from "../../theme/media"

type FlexVariants = "columnStart"
  | "column"
  | "spaceBetween"
  | "center"

type AlignItemsOptions = "start" | "baseline" | "end" | "stretch"

type FlexProps = {
  variant?: FlexVariants;
  gap?: number;
  gutter?: number;
  wrap?: boolean;
  responsive?: boolean;
  marginY?: number;
  alignItems?: AlignItemsOptions;
  className?: string;
  list?: boolean;
  children: ReactNode;
}

const getFlexVariant = (variant: FlexVariants) => {
  switch (variant) {
    case "columnStart":
      return css`
        flex-direction: column;
        align-items: flex-start;      
      `
    case "column":
      return css`
        flex-direction: column;
      `
    case "spaceBetween":
      return css`
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
      `
    case "center":
      return css`
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
      `
    default:
      break;
  }
}

const getItemAlignment = (option?: AlignItemsOptions) => {
  switch (option) {
    case "start":
      return css`
        align-items: flex-start;      
      `
    case "baseline":
      return css`
        align-items: baseline;
      `
    case "end":
      return css`
        align-items: flex-end;
      `
    case "stretch":
      return css`
        align-items: stretch;
      `
    default:
      return css`
        align-items: center;    
      `
  }
}

const getSpacing = (gap: number, gutter?: number) => {
  if (gutter) {
    return css`
      gap: ${({ theme }) => theme.space[0]};
      margin-left: calc(${({ theme }) => theme.space[gutter]} * -1);
      margin-right: calc(${({ theme }) => theme.space[gutter]} * -1);
    `
  } else {
    return css`
      gap: ${({ theme }) => theme.space[gap]};
    `
  }
}

const StyledFlexItem = styled.div<FlexProps>`
  display: flex;
  ${({ variant }) => getFlexVariant(variant)}

  ${({ alignItems }) => getItemAlignment(alignItems)}

  ${({ gap, gutter }) => getSpacing(gap, gutter)}

  ${({ wrap }) => wrap && css`
    flex-wrap: wrap;
  `}

  ${({ responsive }) => responsive && css`
    flex-direction: column;

    @media ${media.small} {
      flex-direction: row;
    }
  `}

  ${({ marginY }) => marginY && css`
    margin-top: ${({ theme }) => theme.space[marginY]};
    margin-bottom: ${({ theme }) => theme.space[marginY]};
  `}

  ${({ list }) => list && css`
    list-style: none;
    padding: 0;
    margin: 0;
  `}
`

const Flex = ({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  alignItems,
  list,
  className,
  children,
  ...props
}: FlexProps) => {
  return (
    <StyledFlexItem
      variant={variant}
      gap={gap}
      wrap={wrap}
      responsive={responsive}
      marginY={marginY}
      alignItems={alignItems}
      list={list}
      className={className}
      {...props}
    >
      {children}
    </StyledFlexItem>
  )
}

export default Flex;