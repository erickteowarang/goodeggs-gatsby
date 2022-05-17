import { IGatsbyImageData } from 'gatsby-plugin-image';

export type CTAProps = {
  id: string;
  url: string;
  title: string;
};

export type GatsbyImageProps = {
  id: string;
  gatsbyImageData: IGatsbyImageData;
  alt: string;
};

export type MenuItem = {
  id: string;
  url: string;
  label: string;
};

export type PortfolioItemCard = {
  title: string;
  featuredImage: {
    node: GatsbyImageProps;
  };
  excerpt: string;
  uri: string;
}
