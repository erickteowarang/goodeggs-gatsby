import React from "react"
import styled from "styled-components"

type SpacingProps = {
  size?: number
  auto?: boolean
}

const StyledSpacing = styled.div<SpacingProps>`
  margin: ${({ theme, size, auto }) => (auto || !size) ? "auto" : theme.space[size]};
`

const Spacing = ({
  size,
  auto,
}: SpacingProps) => (
  <StyledSpacing size={size} auto={auto} />
)

export default Spacing;