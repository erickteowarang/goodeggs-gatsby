import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GatsbyImageProps } from 'types/global';

type ImageProps = {
  image: GatsbyImageProps;
  style?: React.CSSProperties;
};

const Image = ({ image, style }: ImageProps) => (
  <>
    {image.url?.includes('svg') ? (
      <img src={image.url} alt={image.alt} style={style} />
    ) : (
      <GatsbyImage
        alt={image.alt}
        image={getImage(image.gatsbyImageData)!}
        style={style}
      />
    )}
  </>
);

export default Image;
