import React, { ReactNode } from "react"
import styled from "styled-components"
import { media } from "../../theme/media"

type SectionProps = {
  children: ReactNode
}

const StyledSection = styled.section`
  padding-top: ${({ theme }) => theme.space[4]};
  padding-bottom: ${({ theme }) => theme.space[4]};

  @media ${media.small} {
    padding-top: ${({ theme }) => theme.space[5]};
    padding-bottom: ${({ theme }) => theme.space[5]};
  }
`

const Section = ({ 
  children 
}: SectionProps) => (
  <StyledSection>
    {children}
  </StyledSection>
)

export default Section;
