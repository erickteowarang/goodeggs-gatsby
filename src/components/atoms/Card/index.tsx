import React from 'react';
import parse from 'html-react-parser';
import { navigate } from 'gatsby';
import styled, { css } from 'styled-components';
import { GatsbyImageProps } from 'types/global';
import Image from 'components/atoms/Image';
import { media } from 'theme/media';

export type CardProps = {
  image: GatsbyImageProps;
  heading: string;
  content: string;
  fullWidth?: boolean;
  tags?: Array<string>;
  link?: string;
  imageStyles?: {
    [key: string]: string
  }
};

const StyledCard = styled.div<{ fullWidth?: boolean; hasLink?: boolean }>`
  width: 100%;  

  .card-image {
    width: 100%;
    border-radius: 20px;
  }

  ${({ hasLink }) =>
    hasLink &&
    css`
      cursor: pointer;
    `}

    @media ${media.medium} {
      width: ${({ fullWidth }) => (fullWidth ? '100%' : '333px')};
    }
`;

const CardHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const CardContent = styled.p`
  color: ${({ theme }) => theme.colors.blockText};
  margin: ${({ theme }) => theme.space[3]} 0;
`;

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
`;

const handleCardClick = (link?: string) => {
  if (link) {
    navigate(link);
  }
};

const Card = ({
  image,
  heading,
  content,
  tags,
  fullWidth,
  link,
  imageStyles,
}: CardProps) => (
  <StyledCard
    fullWidth={fullWidth}
    hasLink={link ? true : false}
    onClick={() => handleCardClick(link)}
  >
    {image && (
      <Image
        style={{
          objectFit: 'cover',
          maxWidth: '100%',
          ...imageStyles,
        }}
        image={image}
      />
    )}
    <CardHeading>{heading}</CardHeading>
    <CardContent>{parse(content)}</CardContent>
    {tags?.map((tag) => (
      <CardTags>{tag}</CardTags>
    ))}
  </StyledCard>
);

export default Card;
