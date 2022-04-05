import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"
import Container from "../Container"
import Flex from "../Flex"
import {
  Section,
  Text,
  Heading,
  Box
} from "../ui"

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

const Hero = ({
  heading,
  text,
  cta,
  image
}: HeroProps) => {
  return (
    <Section>
      <Container>
        <Flex gap={4} responsive>
          <Box width="half">
            {image && (
              <GatsbyImage
                alt={image.alt}
                image={getImage(image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {heading}
            </Heading>
            <Text as="p">{text}</Text>
            {cta && (
              <a href={cta.url}>{cta.title}</a>
            )}
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

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
