import React from "react"
import { graphql } from "gatsby"

const TextBanner = ({ 
  text,
  cta
}) => (
  <>
    {console.log(text)}
    {console.log(cta)}
  </>
)

export default TextBanner;

export const query = graphql`
  fragment TextBannerFragment on TextBanner {
    text
    cta {
      target
      title
      url
    }
  }
`