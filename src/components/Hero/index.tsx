import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"

import Box from "../Box"
import Container from "../Container"
import Flex from "../Flex"
import Section from "../Section"
import { Text, Heading } from "../Typography"

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
      <Container customWidth="1250px">
        <Flex gap={5} responsive>
          <Box width="55%">
            <Heading as="h1" isLarge>
              {heading}
            </Heading>
            <Text>{text}</Text>
            {cta && (
              <a href={cta.url}>{cta.title}</a>
            )}
          </Box>
          <Box width="45%">
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
