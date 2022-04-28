import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GatsbyImageProps } from 'types/global';

export type CardProps = {
  image: GatsbyImageProps
  heading: string
  content: string
}

const StyledCard = styled.div`
  width: 333px;
`

const CardHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.space[2]};
`

const CardContent = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.blockText};
  margin: ${({ theme }) => theme.space[3]} 0;
`

const Card = ({
  image,
  heading,
  content,
}: CardProps) => (
  <StyledCard>
    {image && (
      <GatsbyImage
        alt={image.alt}
        image={getImage(image.gatsbyImageData)!}
      />
    )}
    <CardHeading>{heading}</CardHeading>
    <CardContent>{content}</CardContent>
  </StyledCard>
);

export default Card;
