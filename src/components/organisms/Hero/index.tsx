import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"
import parse, { domToReact, HTMLReactParserOptions, Element } from "html-react-parser";

import Box from "../../atoms/Box"
import Button from "../../atoms/Button"
import Container from "../../atoms/Container"
import Flex from "../../atoms/Flex"
import Section from "../../atoms/Section"
import { Text, Heading } from "../../atoms/Typography"

type HeroProps = {
  id: string
  heading: string
  text: string
  cta: {
    id: string
    url: string
    title: string
  }
  image: {
    id: string
    gatsbyImageData: IGatsbyImageData
    alt: string
  }
}

const HeroContent = styled(Text)`
  margin: ${({ theme }) => theme.space[4]} 0;
  font-size: 20px;
  font-weight: lighter;
`

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.name === "p") {
      return <>{domToReact(domNode.children)}</>;
    }
  }
};

const Hero = ({
  heading,
  text,
  cta,
  image
}: HeroProps) => (
  <Section>
    <Container customWidth="1250px">
      <Flex variant="spaceBetween" responsive>
        <Box width="55%">
          <Heading 
            as="h1" 
            isLarge
            isHighlighted
          >
            {parse(heading, options)}
          </Heading>
          <HeroContent>{text}</HeroContent>
          {cta && (
            <Button url={cta.url} isLink>{cta.title}</Button>
          )}
        </Box>
        <Box width="40%">
          {image && (
            <GatsbyImage
              alt={image.alt}
              image={getImage(image.gatsbyImageData)!}
            />
          )}
        </Box>
      </Flex>
    </Container>
  </Section>
)

export default Hero;

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
      url
    }
    cta {
      target
      title
      url
    }
  }
`
