import React from "react"
import styled from "styled-components"

export const Blockquote = styled.blockquote`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: ${({ theme }) => theme.space[4]};
`