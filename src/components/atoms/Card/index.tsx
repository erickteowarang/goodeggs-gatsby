import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GatsbyImageProps } from 'types/global';

export type CardProps = {
  image: GatsbyImageProps
  heading: string
  content: string
  tags?: Array<string>
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
  color: ${({ theme }) => theme.colors.blockText};
  margin: ${({ theme }) => theme.space[3]} 0;
`

const CardTags = styled.span`
  color: ${({ theme }) => theme.colors.tagBlue};

  &::before {
    content: '/';
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }

  &:first-of-type {
    &::before {
      content: none;
    }
  }
`

const Card = ({
  image,
  heading,
  content,
  tags,
}: CardProps) => (
  <StyledCard>
    {image && (
      <GatsbyImage
        alt={image.alt}
        image={getImage(image.gatsbyImageData)!}
      />
    )}
    <CardHeading>{heading}</CardHeading>
    <CardContent>{parse(content)}</CardContent>
    {tags?.map(tag => (
      <CardTags>{tag}</CardTags>
    ))}
  </StyledCard>
);

export default Card;
