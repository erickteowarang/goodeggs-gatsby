import React from "react"
import styled, { DefaultTheme } from "styled-components"

type ContainerProps = {
  children: React.ReactNode;
  variant?: "wide" | "narrow" | "tight" | "full"
}

const getMaxWidth = (
  variant: Pick<ContainerProps, "variant">,
  theme: DefaultTheme
) => {
  if (variant) {
    switch (variant) {
      case "wide": 
        return theme.sizes.container
      case "narrow":
        return theme.sizes.narrow
      case "tight":
        return theme.sizes.tight
      default:
        return theme.sizes.container
    }
  }
  
  return theme.sizes.container
}

const StyledContainer = styled.div<ContainerProps>`
  max-width: ${({ theme, variant }) => getMaxWidth(variant, theme)};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.space[4]};
  padding-right: ${({ theme }) => theme.space[4]};
` 

const Container = ({ 
  children,
  size
}: ContainerProps) => (
  <StyledContainer size={size}>
    {children}
  </StyledContainer>
)

export default Container